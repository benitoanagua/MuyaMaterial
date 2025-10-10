import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { ZellijColorsMapper } from "./zellij-colors-mapper.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ZellijThemeBuilder {
  static buildTheme(scheme, name) {
    const colors = ZellijColorsMapper.mapSchemeToZellij(scheme);

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

  static generateAllThemes(variants, createScheme, themeConfig = null) {
    const generated = [];

    for (const variant of variants) {
      const scheme = createScheme({
        isDark: variant.isDark,
        contrastLevel: variant.contrastLevel,
        seedColorType: variant.seedColor,
        themeConfig: themeConfig,
      });

      const themeContent = this.buildTheme(scheme, variant.name);
      const filename = this.toKebabCase(`muya-material-${variant.name}`);
      const path = this.saveTheme(themeContent, filename);

      generated.push({
        variant,
        path,
      });
    }

    return generated;
  }
}
