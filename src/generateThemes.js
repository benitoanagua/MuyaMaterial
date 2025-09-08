import { createDynamicScheme } from "./dynamicScheme.js";
import { createTheme } from "./createTheme.js";
import { themeConfig, themeVariants } from "./theme-config.js";

export function generateAllThemes() {
  console.log("🔥 Generando temas Material Design 3...\n");

  themeVariants.forEach(({ name, filename, isDark, contrastLevel }) => {
    const scheme = createDynamicScheme({ isDark, contrastLevel });
    createTheme(scheme, `${themeConfig.name} - ${name}`, filename);
  });

  console.log("✅ Todos los temas generados.");
}
