import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
  DynamicScheme,
} from "@material/material-color-utilities";

/**
 * Genera todas las paletas de colores dinámicas desde un esquema
 */
export function getAllDynamicColors(scheme) {
  const colors = {};

  const colorProperties = [
    "primary",
    "onPrimary",
    "primaryContainer",
    "onPrimaryContainer",
    "secondary",
    "onSecondary",
    "secondaryContainer",
    "onSecondaryContainer",
    "tertiary",
    "onTertiary",
    "tertiaryContainer",
    "onTertiaryContainer",
    "error",
    "onError",
    "errorContainer",
    "onErrorContainer",
    "background",
    "onBackground",
    "surface",
    "surfaceDim",
    "surfaceBright",
    "surfaceContainerLowest",
    "surfaceContainerLow",
    "surfaceContainer",
    "surfaceContainerHigh",
    "surfaceContainerHighest",
    "onSurface",
    "surfaceVariant",
    "onSurfaceVariant",
    "inverseSurface",
    "inverseOnSurface",
    "outline",
    "outlineVariant",
    "shadow",
    "scrim",
    "surfaceTint",
    "inversePrimary",
  ];

  colorProperties.forEach((property) => {
    try {
      const colorValue = scheme[property];
      if (typeof colorValue === "number") {
        colors[property] = hexFromArgb(colorValue);
      }
    } catch (error) {
      console.warn(
        `No se pudo obtener la propiedad de color: ${property}`,
        error
      );
    }
  });

  return colors;
}

/**
 * Genera esquemas de colores Material Design 3
 */
export function generateColorScheme(
  seedColor,
  variant = 2,
  isDark = false,
  contrastLevel = 0
) {
  try {
    const sourceColorArgb = argbFromHex(seedColor);
    const theme = themeFromSourceColor(sourceColorArgb);

    const options = {
      sourceColorArgb,
      variant,
      contrastLevel,
      isDark,
      primaryPalette: theme.palettes.primary,
      secondaryPalette: theme.palettes.secondary,
      tertiaryPalette: theme.palettes.tertiary,
      neutralPalette: theme.palettes.neutral,
      neutralVariantPalette: theme.palettes.neutralVariant,
    };

    const scheme = new DynamicScheme(options);
    return getAllDynamicColors(scheme);
  } catch (error) {
    console.error("❌ Error generando esquema de colores:", error);
    throw error;
  }
}
