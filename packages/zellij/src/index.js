import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ZellijThemeBuilder } from "./theme/zellij-theme-builder.js";

class ZellijThemeGenerator {
  static async generateThemes() {
    try {
      console.log("🎨 Generating Zellij themes...");

      const generatedThemes = ZellijThemeBuilder.generateAllThemes(
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
  }

  static displayErrorMessage(error) {
    console.error("❌ Error generating Zellij themes:");
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split("\n")[1]}`);
    }
  }
}

// Execute theme generation
await ZellijThemeGenerator.generateThemes();
