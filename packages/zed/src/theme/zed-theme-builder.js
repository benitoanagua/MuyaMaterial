import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { ZedColorsMapper } from "./zed-colors-mapper.js";
import { ZedSyntaxMapper } from "./zed-syntax-mapper.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ZedThemeBuilder {
  static buildTheme(scheme, name, appearance) {
    const colors = ZedColorsMapper.mapSchemeToZed(scheme);
    const syntax = ZedSyntaxMapper.mapSchemeToSyntax(scheme);

    return {
      $schema: "https://zed.dev/schema/themes/v0.2.0.json",
      name: `Muya Material - ${name}`,
      author: "Benito Anagua",
      themes: [
        {
          name: `Muya Material - ${name}`,
          appearance: appearance,
          style: {
            ...colors,
            syntax,
          },
        },
      ],
    };
  }

  static buildThemeFamily(variants) {
    return {
      $schema: "https://zed.dev/schema/themes/v0.2.0.json",
      name: "Muya Material",
      author: "Benito Anagua",
      themes: variants.map((variant) => ({
        name: `Muya Material - ${variant.name}`,
        appearance: variant.isDark ? "dark" : "light",
        style: {
          ...ZedColorsMapper.mapSchemeToZed(variant.scheme),
          syntax: ZedSyntaxMapper.mapSchemeToSyntax(variant.scheme),
        },
      })),
    };
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

  static saveTheme(theme, filename) {
    const themesDir = resolve(__dirname, "../../themes");
    this.ensureDirectoryExists(themesDir);

    const themePath = resolve(themesDir, `${filename}.json`);
    writeFileSync(themePath, JSON.stringify(theme, null, 2));

    return themePath;
  }

  static generateAllThemes(variants, createScheme) {
    const generated = [];

    // Generate individual themes
    for (const variant of variants) {
      const scheme = createScheme({
        isDark: variant.isDark,
        contrastLevel: variant.contrastLevel,
        seedColorType: variant.seedColor,
      });

      const theme = this.buildTheme(
        scheme,
        variant.name,
        variant.isDark ? "dark" : "light"
      );

      const filename = this.toKebabCase(`muya-material-${variant.name}`);
      const path = this.saveTheme(theme, filename);

      generated.push({
        variant: { ...variant, scheme },
        path,
      });
    }

    // Generate theme family
    const themeFamily = this.buildThemeFamily(generated.map((g) => g.variant));
    const familyPath = this.saveTheme(themeFamily, "muya-material-family");
    generated.push({ variant: { name: "Theme Family" }, path: familyPath });

    return generated;
  }
}
