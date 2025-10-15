import {
  createDynamicScheme,
  generateTerminalColors,
  themeVariants,
  defaultThemeConfig,
} from "@muya-material/core";
import { AlacrittyThemeBuilder } from "./theme/alacritty-theme-builder.js";

console.log("🎨 Generating Alacritty themes...");

try {
  const themeConfig = {
    ...defaultThemeConfig,
    variant: "FIDELITY",
    contrastLevel: 0,
  };

  const generatedThemes = AlacrittyThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme,
    generateTerminalColors,
    themeConfig
  );

  console.log("\n✅ Alacritty themes generated successfully:");
  console.log(`   Variant: ${themeConfig.variant}`);
  console.log(`   Contrast Level: ${themeConfig.contrastLevel}`);
  generatedThemes.forEach(({ variant, path }) => {
    console.log(`   • ${variant.name} → ${path}`);
  });
} catch (error) {
  console.error("❌ Error generating Alacritty themes:");
  console.error(`   Message: ${error.message}`);
  process.exit(1);
}
