import {
  createDynamicScheme,
  themeVariants,
  getThemeConfig,
} from "@muya-material/core";
import { ThemeBuilder } from "./theme/theme-builder.js";

class VSCodeThemeGenerator {
  static generateThemes(customThemeConfig = null) {
    try {
      console.log("🎨 Generating VSCode themes...");

      const config = customThemeConfig
        ? getThemeConfig(customThemeConfig)
        : null;

      const generatedThemes = ThemeBuilder.generateAllThemes(
        themeVariants,
        createDynamicScheme,
        config
      );

      this.displaySuccessMessage(generatedThemes);
      this.displayThemeStructure();

      return generatedThemes;
    } catch (error) {
      this.displayErrorMessage(error);
      process.exit(1);
    }
  }

  static displaySuccessMessage(generatedThemes) {
    console.log("\n✅ VSCode themes generated successfully:");
    generatedThemes.forEach(({ variant, path }) => {
      console.log(`   • ${variant.name} → ${path}`);
    });
  }

  static displayThemeStructure() {
    console.log("\n📝 Generated theme structure (VSCode format):");
    console.log("   - Schema: vscode://schemas/color-theme");
    console.log("   - Components: colors, tokenColors, semanticHighlighting");
    console.log("   - Format: JSON theme files");
    console.log("   - File extension: .json");
  }

  static displayErrorMessage(error) {
    console.error("❌ Error generating VSCode themes:");
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split("\n")[1]}`);
    }
  }
}

export const generateVSCodeThemes = (customThemeConfig = null) => {
  return VSCodeThemeGenerator.generateThemes(customThemeConfig);
};

export const generateCustomVSCodeThemes = (config) => {
  return generateVSCodeThemes(config);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  VSCodeThemeGenerator.generateThemes();
}

export default VSCodeThemeGenerator;
