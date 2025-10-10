import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ThemeBuilder } from "./theme/theme-builder.js";

console.log("🎨 Generating VSCode themes...");

try {
  const generatedThemes = ThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme
  );

  console.log("\n✅ VSCode themes generated successfully:");
  generatedThemes.forEach(({ variant, path }) => {
    console.log(`   • ${variant.name} → ${path}`);
  });
} catch (error) {
  console.error("❌ Error generating VSCode themes:");
  console.error(`   Message: ${error.message}`);
  process.exit(1);
}
