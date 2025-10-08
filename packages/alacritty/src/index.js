import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { AlacrittyThemeBuilder } from "./theme/alacritty-theme-builder.js";

class AlacrittyThemeGenerator {
  static async generateThemes() {
    try {
      console.log("🎨 Generating Alacritty themes...");

      const generatedThemes = AlacrittyThemeBuilder.generateAllThemes(
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
    console.log("   - Format: TOML configuration files");
  }

  static displayErrorMessage(error) {
    console.error("❌ Error generating Alacritty themes:");
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split("\n")[1]}`);
    }
  }
}

// Execute theme generation
await AlacrittyThemeGenerator.generateThemes();
