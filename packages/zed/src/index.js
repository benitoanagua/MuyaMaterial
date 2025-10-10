import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ZedThemeBuilder } from "./theme/zed-theme-builder.js";

console.log("🎨 Generating Zed themes (v0.2.0 compatible)...");

try {
  const generatedThemes = ZedThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme
  );

  console.log("\n✅ Zed themes generated successfully (v0.2.0 compatible):");
  generatedThemes.forEach(({ variant, path }) => {
    if (variant && variant.name !== "Theme Family") {
      console.log(`   • ${variant.name} → ${path}`);
    }
  });
} catch (error) {
  console.error("❌ Error generating Zed themes:");
  console.error(`   Message: ${error.message}`);
  process.exit(1);
}
