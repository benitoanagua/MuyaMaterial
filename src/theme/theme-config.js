export const themeConfig = {
  seedColor: "#7D944C",
  variant: "FIDELITY",
  name: "Muya Material",
  publisher: "Benito Anagua",
};

export const themeVariants = [
  {
    name: "Black",
    filename: "material-black",
    isDark: true,
    contrastLevel: 0,
    uiTheme: "vs-dark",
  },
  {
    name: "Dark",
    filename: "material-dark",
    isDark: true,
    contrastLevel: -1,
    uiTheme: "vs-dark",
  },
  {
    name: "Light",
    filename: "material-light",
    isDark: false,
    contrastLevel: 0,
    uiTheme: "vs",
  },
  {
    name: "Soft",
    filename: "material-soft",
    isDark: false,
    contrastLevel: -1,
    uiTheme: "vs",
  },
];

export const AVAILABLE_VARIANTS = [
  "TONAL_SPOT",
  "NEUTRAL",
  "VIBRANT",
  "EXPRESSIVE",
  "MONOCHROME",
  "CONTENT",
  "FIDELITY",
];
