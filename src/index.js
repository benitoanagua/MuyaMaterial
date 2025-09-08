import { ThemeBuilder } from "./theme/theme-builder.js";
import { themeVariants } from "./theme/theme-config.js";
import { createDynamicScheme } from "./theme/dynamic-scheme.js";

// Generar todos los temas
const generatedThemes = ThemeBuilder.generateAllThemes(
  themeVariants,
  createDynamicScheme
);

console.log("🎨 Temas generados:");
generatedThemes.forEach(({ variant, path }) => {
  console.log(`   • ${variant.name} → ${path}`);
});

console.log("\n✅ Todos los temas han sido generados exitosamente!");
