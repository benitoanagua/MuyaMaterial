export const defaultThemeConfig = {
  seedColorDefault: "#7D944C",
  seedColorComplement: "#6B5693",
  variant: "FIDELITY",
  name: "Muya Material",
  publisher: "Benito Anagua",
};

export const themeConfig = { ...defaultThemeConfig };

export const getThemeConfig = (customConfig = {}) => {
  return {
    ...defaultThemeConfig,
    ...customConfig,
  };
};

export const themeVariants = [
  {
    name: "Olive Dark",
    filename: "olive-dark",
    isDark: true,
    contrastLevel: 0,
    uiTheme: "vs-dark",
    seedColor: "default",
  },
  {
    name: "Mystic Dark",
    filename: "mystic-dark",
    isDark: true,
    contrastLevel: 0,
    uiTheme: "vs-dark",
    seedColor: "complement",
  },
  {
    name: "Olive Light",
    filename: "olive-light",
    isDark: false,
    contrastLevel: 0,
    uiTheme: "vs",
    seedColor: "default",
  },
  {
    name: "Mystic Light",
    filename: "mystic-light",
    isDark: false,
    contrastLevel: 0,
    uiTheme: "vs",
    seedColor: "complement",
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
  "RAINBOW",
  "FRUIT_SALAD",
];
