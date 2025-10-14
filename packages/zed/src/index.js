import {
  createDynamicScheme,
  generateTerminalColors,
  themeVariants,
} from "@muya-material/core";
import { ZedThemeBuilder } from "./theme/zed-theme-builder.js";

console.log("🎨 Generating Zed themes with terminal colors...");

try {
  const generatedThemes = ZedThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme,
    generateTerminalColors
  );

  console.log("\n✅ Zed themes generated successfully:");
  generatedThemes.forEach(({ variant, path }) => {
    if (variant && variant.name !== "Theme Family") {
      console.log(`   • ${variant.name} → ${path}`);
    } else if (variant && variant.name === "Theme Family") {
      console.log(`   • Theme Family → ${path}`);
    }
  });
} catch (error) {
  console.error("❌ Error generating Zed themes:");
  console.error(`   Message: ${error.message}`);
  process.exit(1);
}
