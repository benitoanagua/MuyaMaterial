import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import Toml from "@iarna/toml";
import { StarshipColorsMapper } from "./starship-colors-mapper.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class StarshipThemeBuilder {
  static buildTheme(scheme, terminalColors, name) {
    const colors = StarshipColorsMapper.mapSchemeToStarship(
      scheme,
      terminalColors,
      name
    );

    return {
      colors,
      metadata: colors._metadata,
    };
  }

  static generateThemeTOMLContent(themeData, variantName) {
    const paletteName = `muya_${variantName.toLowerCase().replace(/ /g, "_")}`;
    const paletteConfig = StarshipColorsMapper.generatePaletteConfig(
      themeData.colors,
      paletteName
    );

    const themeConfig = {
      $schema: "https://starship.rs/config-schema.json",
      palette: paletteName,
      palettes: {
        [paletteName]: paletteConfig.colors,
      },
    };

    return Toml.stringify(themeConfig);
  }

  static toKebabCase(str) {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  static ensureDirectoryExists(dir) {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  }

  static saveTheme(tomlContent, filename) {
    const themesDir = resolve(__dirname, "../../themes");
    this.ensureDirectoryExists(themesDir);

    const themePath = resolve(themesDir, `${filename}.toml`);
    writeFileSync(themePath, tomlContent);

    return themePath;
  }

  static generateThemeForVariant(
    variant,
    createScheme,
    generateTerminalColors,
    themeConfig = null
  ) {
    const scheme = createScheme({
      isDark: variant.isDark,
      contrastLevel: themeConfig?.contrastLevel ?? variant.contrastLevel,
      seedColorType: variant.seedColor,
      themeConfig,
    });

    const terminalColors = generateTerminalColors({
      isDark: variant.isDark,
      seedColorType: variant.seedColor,
      themeConfig,
    });

    const themeData = this.buildTheme(scheme, terminalColors, variant.name);
    const tomlContent = this.generateThemeTOMLContent(themeData, variant.name);

    const filename = this.toKebabCase(`muya-material-${variant.name}`);
    const path = this.saveTheme(tomlContent, filename);

    return { variant, path, themeData };
  }

  static generateAllThemes(
    variants,
    createScheme,
    generateTerminalColors,
    themeConfig = null
  ) {
    return variants.map((variant) =>
      this.generateThemeForVariant(
        variant,
        createScheme,
        generateTerminalColors,
        themeConfig
      )
    );
  }
}
