import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ZellijThemeBuilder } from "./theme/zellij-theme-builder.js";

console.log("🎨 Generating Zellij themes...");

try {
  const generatedThemes = ZellijThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme
  );

  console.log("\n✅ Zellij themes generated successfully:");
  generatedThemes.forEach(({ variant, path }) => {
    console.log(`   • ${variant.name} → ${path}`);
  });
} catch (error) {
  console.error("❌ Error generating Zellij themes:");
  console.error(`   Message: ${error.message}`);
  process.exit(1);
}
