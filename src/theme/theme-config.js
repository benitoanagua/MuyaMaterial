export const themeConfig = {
  seedColor: "#6750A4",
  variant: 2, // TONAL_SPOT
  name: "Muya Material",
  publisher: "Benito Anagua",
};

export const themeVariants = [
  {
    name: "Black",
    filename: "materialblack",
    isDark: true,
    contrastLevel: 0,
    uiTheme: "vs-dark",
  },
  {
    name: "Dark",
    filename: "materialdark",
    isDark: true,
    contrastLevel: -1,
    uiTheme: "vs-dark",
  },
  {
    name: "Light",
    filename: "materiallight",
    isDark: false,
    contrastLevel: 0,
    uiTheme: "vs",
  },
  {
    name: "Soft",
    filename: "materialsoft",
    isDark: false,
    contrastLevel: -1,
    uiTheme: "vs",
  },
];
