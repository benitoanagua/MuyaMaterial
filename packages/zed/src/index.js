import { createDynamicScheme, themeVariants } from "@muya-material/core";
import { ZedThemeBuilder } from "./theme/zed-theme-builder.js";

// Generar todos los temas Zed
const generatedThemes = ZedThemeBuilder.generateAllThemes(
  themeVariants,
  createDynamicScheme
);

console.log("🎨 Temas Zed generados:");
generatedThemes.forEach(({ variant, path }) => {
  console.log(`   • ${variant.name} → ${path}`);
});

console.log("\n✅ Todos los temas Zed han sido generados exitosamente!");
