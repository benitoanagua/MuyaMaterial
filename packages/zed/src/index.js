import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ZedThemeBuilder } from "./theme/zed-theme-builder.js";

class ZedThemeGenerator {
  static async generateThemes() {
    try {
      console.log("🎨 Generating Zed themes...");

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
    console.log("\n✅ Zed themes generated successfully:");
    generatedThemes.forEach(({ variant, path }) => {
      console.log(`   • ${variant.name} → ${path}`);
    });
  }

  static displayThemeStructure() {
    console.log("\n📝 Generated theme structure:");
    console.log("   - Each theme has 'themes' property as array");
    console.log("   - Each individual theme has 'name' and 'appearance'");
    console.log("   - Styles are nested in 'style' within each theme");
    console.log("   - Syntax highlighting included in 'syntax' property");
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
