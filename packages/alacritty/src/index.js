import {
  createDynamicScheme,
  themeVariants,
  getThemeConfig,
} from "@muya-material/core";
import { AlacrittyThemeBuilder } from "./theme/alacritty-theme-builder.js";

class AlacrittyThemeGenerator {
  static async generateThemes(customThemeConfig = null) {
    try {
      console.log("🎨 Generating Alacritty themes...");

      const config = customThemeConfig
        ? getThemeConfig(customThemeConfig)
        : null;

      const generatedThemes = AlacrittyThemeBuilder.generateAllThemes(
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
    console.log("\n✅ Alacritty themes generated successfully:");
    generatedThemes.forEach(({ variant, path }) => {
      console.log(`   • ${variant.name} → ${path}`);
    });
  }

  static displayThemeStructure() {
    console.log("\n📝 Generated theme structure (TOML format):");
    console.log("   - Primary colors: background, foreground, cursor");
    console.log(
      "   - Normal colors: black, red, green, yellow, blue, magenta, cyan, white"
    );
    console.log("   - Bright colors: variants for bright terminal colors");
    console.log("   - Dim colors: variants for dim terminal colors");
    console.log("   - Format: TOML configuration files");
    console.log("   - File extension: .toml");
  }

  static displayErrorMessage(error) {
    console.error("❌ Error generating Alacritty themes:");
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split("\n")[1]}`);
    }
  }
}

export const generateAlacrittyThemes = async (customThemeConfig = null) => {
  return await AlacrittyThemeGenerator.generateThemes(customThemeConfig);
};

export const generateCustomAlacrittyThemes = (config) => {
  return generateAlacrittyThemes(config);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  await AlacrittyThemeGenerator.generateThemes();
}

export default AlacrittyThemeGenerator;
