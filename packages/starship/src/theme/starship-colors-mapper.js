export class StarshipColorsMapper {
  static mapSchemeToStarship(scheme, terminalColors, variantName) {
    const isDark = variantName.toLowerCase().includes("dark");

    return {
      rosewater: terminalColors.normal.magenta,
      flamingo: terminalColors.bright.magenta,
      pink: scheme.tertiary,
      mauve: scheme.primary,
      red: scheme.error,
      maroon: terminalColors.normal.red,
      peach: terminalColors.normal.yellow,
      yellow: terminalColors.bright.yellow,
      green: terminalColors.normal.green,
      teal: terminalColors.normal.cyan,
      sky: scheme.secondary,
      sapphire: terminalColors.bright.blue,
      blue: terminalColors.normal.blue,
      lavender: scheme.tertiaryContainer,

      text: scheme.onSurface,
      subtext1: scheme.onSurfaceVariant,
      subtext0: scheme.outlineVariant,
      overlay2: scheme.outline,
      overlay1: scheme.surfaceContainerHigh,
      overlay0: scheme.surfaceContainer,
      surface2: scheme.surfaceContainerLow,
      surface1: scheme.surfaceContainerLowest,
      surface0: scheme.surfaceDim,
      base: scheme.background,
      mantle: scheme.surface,
      crust: scheme.surfaceBright,

      _metadata: {
        name: `Muya Material - ${variantName}`,
        variant: isDark ? "dark" : "light",
        seedColor: scheme.seedColor,
        generated: new Date().toISOString(),
      },
    };
  }

  static generatePaletteConfig(colors, paletteName) {
    const paletteConfig = {};

    Object.entries(colors).forEach(([key, value]) => {
      if (!key.startsWith("_")) {
        paletteConfig[key] = value;
      }
    });

    return {
      palette: paletteName,
      colors: paletteConfig,
    };
  }
}
