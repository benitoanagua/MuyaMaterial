export const themeConfig = {
  seedColor: "#6750A4",
  variant: 2, // TONAL_SPOT
  name: "Aguayo Accent",
  publisher: "Benito Anagua",
};

export const themeVariants = [
  {
    name: "Black (High Contrast)",
    filename: "aguayo-black",
    isDark: true,
    contrastLevel: 0,
    uiTheme: "vs-dark",
  },
  {
    name: "Dark",
    filename: "aguayo-dark",
    isDark: true,
    contrastLevel: -1,
    uiTheme: "vs-dark",
  },
  {
    name: "Light",
    filename: "aguayo-light",
    isDark: false,
    contrastLevel: 0,
    uiTheme: "vs",
  },
  {
    name: "Soft (High Contrast)",
    filename: "aguayo-soft",
    isDark: false,
    contrastLevel: -1,
    uiTheme: "vs",
  },
];
