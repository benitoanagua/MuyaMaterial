import {
  createDynamicScheme,
  themeVariants,
  getThemeConfig,
} from "@muya-material/core";
import { ZellijThemeBuilder } from "./theme/zellij-theme-builder.js";

class ZellijThemeGenerator {
  static async generateThemes(customThemeConfig = null) {
    try {
      console.log("🎨 Generating Zellij themes...");

      const config = customThemeConfig
        ? getThemeConfig(customThemeConfig)
        : null;

      const generatedThemes = ZellijThemeBuilder.generateAllThemes(
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
    console.log("\n✅ Zellij themes generated successfully:");
    generatedThemes.forEach(({ variant, path }) => {
      console.log(`   • ${variant.name} → ${path}`);
    });
  }

  static displayThemeStructure() {
    console.log("\n📝 Generated theme structure (KDL format):");
    console.log("   - Schema: Zellij theme specification");
    console.log("   - Components: text, ribbon, table, list, frame");
    console.log("   - Format: RGB color values (0-255)");
    console.log("   - File format: .kdl (KDL configuration files)");
  }

  static displayErrorMessage(error) {
    console.error("❌ Error generating Zellij themes:");
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split("\n")[1]}`);
    }
  }
}

export const generateZellijThemes = async (customThemeConfig = null) => {
  return await ZellijThemeGenerator.generateThemes(customThemeConfig);
};

export const generateCustomZellijThemes = (config) => {
  return generateZellijThemes(config);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  await ZellijThemeGenerator.generateThemes();
}

export default ZellijThemeGenerator;
