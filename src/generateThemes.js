import { generateColorScheme } from "./color-generator.js";
import { createTheme } from "./createTheme.js";
import { themeConfig, themeVariants } from "./theme-config.js";

// Generar y escribir temas para cada variante
export function generateAllThemes() {
  console.log("🔥 Aguayo Accent - Generando temas Material Design...\n");
  console.log(`🎨 Color base: ${themeConfig.seedColor}`);
  console.log(`📦 Variante: ${themeConfig.variant}\n`);

  themeVariants.forEach((variant) => {
    try {
      console.log(`🎯 Generando ${variant.name}...`);

      // Generar esquema de colores Material Design 3
      const colors = generateColorScheme(
        themeConfig.seedColor,
        themeConfig.variant,
        variant.isDark,
        variant.contrastLevel
      );

      // Crear tema VSCode
      createTheme(
        colors,
        `${themeConfig.name} - ${variant.name}`,
        variant.filename
      );
    } catch (error) {
      console.error(`   ❌ Error generando ${variant.name}:`, error.message);
    }
  });

  console.log("\n🎉 ¡Todos los temas generados exitosamente!");
  console.log("📁 Ubicación: ./themes/");
}

// Ejecutar generación de temas
generateAllThemes();
