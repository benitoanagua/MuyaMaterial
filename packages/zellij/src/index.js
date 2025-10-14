import {
  createDynamicScheme,
  generateTerminalColors,
  themeVariants,
  defaultThemeConfig,
} from "@muya-material/core";
import { ZellijThemeBuilder } from "./theme/zellij-theme-builder.js";

console.log("🎨 Generating Zellij themes...");

try {
  const themeConfig = {
    ...defaultThemeConfig,
    variant: "FIDELITY",
    contrastLevel: 0,
  };

  const generatedThemes = ZellijThemeBuilder.generateAllThemes(
    themeVariants,
    createDynamicScheme,
    generateTerminalColors,
    themeConfig
  );

  console.log("\n✅ Zellij themes generated successfully:");
  console.log(`   Variant: ${themeConfig.variant}`);
  console.log(`   Contrast Level: ${themeConfig.contrastLevel}`);
  generatedThemes.forEach(({ variant, path }) => {
    console.log(`   • ${variant.name} → ${path}`);
  });
} catch (error) {
  console.error("❌ Error generating Zellij themes:");
  console.error(`   Message: ${error.message}`);
  console.error(error.stack);
  process.exit(1);
}
