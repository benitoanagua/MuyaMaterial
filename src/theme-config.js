/**
 * Material Design theme configuration for VSCode Aguayo Accent theme
 */

export const themeConfig = {
  // Color primario base - cambia esto para generar nuevos temas
  seedColor: "#29AB87", // Aguayo accent color

  // Variante de Material Design 3 (usa valores numéricos)
  // 0: MONOCHROME, 1: NEUTRAL, 2: TONAL_SPOT, 3: VIBRANT, 4: EXPRESSIVE, 5: FIDELITY, 6: CONTENT, 7: RAINBOW, 8: FRUIT_SALAD
  variant: 2, // TONAL_SPOT por defecto

  // Información del tema
  name: "Aguayo Accent",
  publisher: "Benito Anagua",
};

export const themeVariants = [
  {
    name: "Black (High Contrast)",
    filename: "aguayo-black",
    isDark: true,
    contrastLevel: 1, // Alto contraste
    uiTheme: "vs-dark",
  },
  {
    name: "Dark",
    filename: "aguayo-dark",
    isDark: true,
    contrastLevel: 0, // Contraste normal
    uiTheme: "vs-dark",
  },
  {
    name: "Light",
    filename: "aguayo-light",
    isDark: false,
    contrastLevel: 0, // Contraste normal
    uiTheme: "vs",
  },
  {
    name: "Soft (High Contrast)",
    filename: "aguayo-soft",
    isDark: false,
    contrastLevel: 1, // Alto contraste
    uiTheme: "vs",
  },
];
