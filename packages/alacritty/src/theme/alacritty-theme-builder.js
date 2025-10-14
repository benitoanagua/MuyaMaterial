import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import TOML from "@iarna/toml";
import { AlacrittyColorsMapper } from "./alacritty-colors-mapper.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class AlacrittyThemeBuilder {
  static buildTheme(scheme, terminalColors, name) {
    const colors = AlacrittyColorsMapper.mapSchemeToAlacritty(
      scheme,
      terminalColors
    );

    // Build TOML object structure
    const tomlObject = this.buildTOMLObject(name, colors);

    return tomlObject;
  }

  static buildTOMLObject(themeName, colors) {
    return {
      // Metadata comment (will be handled separately since TOML doesn't support comments in object)
      _comment: `Muya Material - ${themeName}\nGenerated from Material Design 3 color scheme\nAuthor: Benito Anagua`,

      colors: {
        primary: {
          background: colors.primary.background,
          foreground: colors.primary.foreground,
          dim_foreground: colors.primary.dim_foreground,
          bright_foreground: colors.primary.bright_foreground,
        },
        cursor: {
          text: colors.cursor.text,
          cursor: colors.cursor.cursor,
        },
        vi_mode_cursor: {
          text: colors.vi_mode_cursor.text,
          cursor: colors.vi_mode_cursor.cursor,
        },
        selection: {
          text: colors.selection.text,
          background: colors.selection.background,
        },
        search: {
          matches: {
            foreground: colors.search.matches.foreground,
            background: colors.search.matches.background,
          },
          focused_match: {
            foreground: colors.search.focused_match.foreground,
            background: colors.search.focused_match.background,
          },
        },
        hints: {
          start: {
            foreground: colors.hints.start.foreground,
            background: colors.hints.start.background,
          },
          end: {
            foreground: colors.hints.end.foreground,
            background: colors.hints.end.background,
          },
        },
        line_indicator: {
          foreground: colors.line_indicator.foreground,
          background: colors.line_indicator.background,
        },
        footer_bar: {
          background: colors.footer_bar.background,
          foreground: colors.footer_bar.foreground,
        },
        normal: {
          black: colors.normal.black,
          red: colors.normal.red,
          green: colors.normal.green,
          yellow: colors.normal.yellow,
          blue: colors.normal.blue,
          magenta: colors.normal.magenta,
          cyan: colors.normal.cyan,
          white: colors.normal.white,
        },
        bright: {
          black: colors.bright.black,
          red: colors.bright.red,
          green: colors.bright.green,
          yellow: colors.bright.yellow,
          blue: colors.bright.blue,
          magenta: colors.bright.magenta,
          cyan: colors.bright.cyan,
          white: colors.bright.white,
        },
        dim: {
          black: colors.dim.black,
          red: colors.dim.red,
          green: colors.dim.green,
          yellow: colors.dim.yellow,
          blue: colors.dim.blue,
          magenta: colors.dim.magenta,
          cyan: colors.dim.cyan,
          white: colors.dim.white,
        },
      },
    };
  }

  static generateTOMLString(tomlObject, themeName) {
    // Generate TOML string with proper formatting and comments
    let tomlString = `# Muya Material - ${themeName}\n`;
    tomlString += `# Generated from Material Design 3 color scheme\n`;
    tomlString += `# Author: Benito Anagua\n\n`;

    // Convert the object to TOML (excluding the _comment property)
    const { _comment, ...cleanObject } = tomlObject;
    tomlString += TOML.stringify(cleanObject);

    return tomlString;
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

  static saveTheme(tomlObject, themeName, filename) {
    const themesDir = resolve(__dirname, "../../themes");
    this.ensureDirectoryExists(themesDir);

    const themePath = resolve(themesDir, `${filename}.toml`);
    const tomlContent = this.generateTOMLString(tomlObject, themeName);
    writeFileSync(themePath, tomlContent);

    return themePath;
  }

  static generateThemeForVariant(
    variant,
    createScheme,
    generateTerminalColors,
    themeConfig = null
  ) {
    // Generate Material 3 scheme
    const scheme = createScheme({
      isDark: variant.isDark,
      contrastLevel: themeConfig?.contrastLevel ?? variant.contrastLevel,
      seedColorType: variant.seedColor,
      themeConfig,
    });

    // Generate terminal colors separately
    const terminalColors = generateTerminalColors({
      isDark: variant.isDark,
      seedColorType: variant.seedColor,
      themeConfig,
    });

    const themeObject = this.buildTheme(scheme, terminalColors, variant.name);
    const filename = this.toKebabCase(`muya-material-${variant.name}`);
    const path = this.saveTheme(themeObject, variant.name, filename);

    return { variant, path };
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
