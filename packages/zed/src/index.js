import {
  createDynamicScheme,
  themeVariants,
  getThemeConfig,
} from "@muya-material/core";
import { ZedThemeBuilder } from "./theme/zed-theme-builder.js";

class ZedThemeGenerator {
  static async generateThemes(customThemeConfig = null) {
    try {
      console.log("🎨 Generating Zed themes (v0.2.0 compatible)...");

      const config = customThemeConfig
        ? getThemeConfig(customThemeConfig)
        : null;

      const generatedThemes = ZedThemeBuilder.generateAllThemes(
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
    console.log("\n✅ Zed themes generated successfully (v0.2.0 compatible):");

    generatedThemes.forEach(({ variant, path }) => {
      if (variant && variant.name !== "Theme Family") {
        console.log(`   • ${variant.name} → ${path}`);
      }
    });

    const familyTheme = generatedThemes.find(
      (t) => t.variant && t.variant.name === "Theme Family"
    );
    if (familyTheme) {
      console.log(`   • Theme Family → ${familyTheme.path}`);
    }
  }

  static displayThemeStructure() {
    console.log("\n📝 Generated theme structure (v0.2.0 compatible):");
    console.log("   - Schema: https://zed.dev/schema/themes/v0.2.0.json");
    console.log("   - Required fields: author, name, themes[]");
    console.log("   - Each theme has: appearance, name, style");
    console.log("   - Syntax highlighting in 'syntax' property");
    console.log("   - No duplicate properties");
  }

  static displayErrorMessage(error) {
    console.error("❌ Error generating Zed themes:");
    console.error(`   Message: ${error.message}`);

    if (error.stack) {
      console.error(`   Stack: ${error.stack.split("\n")[1]}`);
    }
  }
}

export const generateZedThemes = async (customThemeConfig = null) => {
  return await ZedThemeGenerator.generateThemes(customThemeConfig);
};

export const generateCustomZedThemes = (config) => {
  return generateZedThemes(config);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  await ZedThemeGenerator.generateThemes();
}

export default ZedThemeGenerator;
