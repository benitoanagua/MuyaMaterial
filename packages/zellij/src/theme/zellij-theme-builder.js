import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { ZellijColorsMapper } from "./zellij-colors-mapper.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ZellijThemeBuilder {
  static buildTheme(scheme, terminalColors, name) {
    const colors = ZellijColorsMapper.mapSchemeToZellij(scheme, terminalColors);

    // Build KDL document
    const kdlContent = this.generateKDL(name, colors);

    return kdlContent;
  }

  static generateKDL(themeName, colors) {
    let kdl = `// Muya Material - ${themeName}\n`;
    kdl += `// Generated from Material Design 3 color scheme\n`;
    kdl += `// Author: Benito Anagua\n\n`;

    kdl += `themes {\n`;
    kdl += `    ${this.toKebabCase(themeName)} {\n`;

    // Add all color components
    for (const [componentName, componentColors] of Object.entries(colors)) {
      kdl += `        ${componentName} {\n`;

      for (const [colorName, colorValue] of Object.entries(componentColors)) {
        if (Array.isArray(colorValue)) {
          kdl += `            ${colorName} ${colorValue.join(" ")}\n`;
        } else {
          kdl += `            ${colorName} ${colorValue}\n`;
        }
      }

      kdl += `        }\n`;
    }

    kdl += `    }\n`;
    kdl += `}\n`;

    return kdl;
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

  static saveTheme(kdlContent, filename) {
    const themesDir = resolve(__dirname, "../../themes");
    this.ensureDirectoryExists(themesDir);

    const themePath = resolve(themesDir, `${filename}.kdl`);
    writeFileSync(themePath, kdlContent);

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

    const themeContent = this.buildTheme(scheme, terminalColors, variant.name);
    const filename = this.toKebabCase(`muya-material-${variant.name}`);
    const path = this.saveTheme(themeContent, filename);

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
