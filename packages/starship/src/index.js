// Archivo: ./packages/starship/src/index.js
import {
  createDynamicScheme,
  generateTerminalColors,
  themeVariants,
  defaultThemeConfig,
} from "@muya-material/core";
import { StarshipThemeBuilder } from "./theme/starship-theme-builder.js";

console.log("🎨 Generating Muya Material Starship themes...");

try {
  const themeConfig = {
    ...defaultThemeConfig,
    variant: "FIDELITY",
    contrastLevel: 0,
  };

  const generatedThemes = StarshipThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme,
    generateTerminalColors,
    themeConfig
  );

  console.log("\n✅ Starship themes generated successfully!");
  console.log(`📦 Variant: ${themeConfig.variant}`);
  console.log(`⚡ Contrast Level: ${themeConfig.contrastLevel}\n`);

  console.log("📁 Generated theme files:");
  generatedThemes.forEach(({ variant, path }) => {
    console.log(`   🎨 ${variant.name.padEnd(15)} → ${path}`);
  });
} catch (error) {
  console.error("❌ Error generating Starship themes:");
  console.error(`   Message: ${error.message}`);
  console.error(error.stack);
  process.exit(1);
}
