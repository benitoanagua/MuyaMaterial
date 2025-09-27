import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ZedThemeBuilder } from "./theme/zed-theme-builder.js";

class ZedThemeGenerator {
  static async generateThemes() {
    try {
      console.log("🎨 Generating Zed themes (v0.2.0 compatible)...");

      const generatedThemes = ZedThemeBuilder.generateAllThemes(
        themeVariants,
        createDynamicScheme
      );

      this.displaySuccessMessage(generatedThemes);
      this.displayThemeStructure();
    } catch (error) {
      this.displayErrorMessage(error);
      process.exit(1);
    }
  }

  static displaySuccessMessage(generatedThemes) {
    console.log("\n✅ Zed themes generated successfully (v0.2.0 compatible):");
    generatedThemes.forEach(({ variant, path }) => {
      console.log(`   • ${variant.name} → ${path}`);
    });
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

// Execute theme generation
await ZedThemeGenerator.generateThemes();
