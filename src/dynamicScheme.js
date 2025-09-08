import {
  DynamicScheme,
  themeFromSourceColor,
  argbFromHex,
  hexFromArgb,
  MaterialDynamicColors,
} from "@material/material-color-utilities";

import { themeConfig } from "./theme-config.js";

const sourceColorArgb = argbFromHex(themeConfig.seedColor);
const theme = themeFromSourceColor(sourceColorArgb);

export const createDynamicScheme = ({ isDark, contrastLevel }) => {
  const scheme = new DynamicScheme({
    sourceColorArgb,
    contrastLevel,
    isDark,
    primaryPalette: theme.palettes.primary,
    secondaryPalette: theme.palettes.secondary,
    tertiaryPalette: theme.palettes.tertiary,
    neutralPalette: theme.palettes.neutral,
    neutralVariantPalette: theme.palettes.neutralVariant,
  });

  const extract = (prop) => {
    try {
      const color =
        MaterialDynamicColors[prop]?.getArgb(scheme) ?? scheme[prop];
      return hexFromArgb(color);
    } catch {
      return "#FF00FF";
    }
  };

  return {
    primary: extract("primary"),
    onPrimary: extract("onPrimary"),
    primaryContainer: extract("primaryContainer"),
    onPrimaryContainer: extract("onPrimaryContainer"),
    secondary: extract("secondary"),
    onSecondary: extract("onSecondary"),
    secondaryContainer: extract("secondaryContainer"),
    onSecondaryContainer: extract("onSecondaryContainer"),
    tertiary: extract("tertiary"),
    onTertiary: extract("onTertiary"),
    tertiaryContainer: extract("tertiaryContainer"),
    onTertiaryContainer: extract("onTertiaryContainer"),
    error: extract("error"),
    onError: extract("onError"),
    errorContainer: extract("errorContainer"),
    onErrorContainer: extract("onErrorContainer"),
    background: extract("background"),
    onBackground: extract("onBackground"),
    surface: extract("surface"),
    surfaceDim: extract("surfaceDim"),
    surfaceBright: extract("surfaceBright"),
    surfaceContainerLowest: extract("surfaceContainerLowest"),
    surfaceContainerLow: extract("surfaceContainerLow"),
    surfaceContainer: extract("surfaceContainer"),
    surfaceContainerHigh: extract("surfaceContainerHigh"),
    surfaceContainerHighest: extract("surfaceContainerHighest"),
    onSurface: extract("onSurface"),
    surfaceVariant: extract("surfaceVariant"),
    onSurfaceVariant: extract("onSurfaceVariant"),
    outline: extract("outline"),
    outlineVariant: extract("outlineVariant"),
    shadow: extract("shadow"),
    scrim: extract("scrim"),
    inverseSurface: extract("inverseSurface"),
    inverseOnSurface: extract("inverseOnSurface"),
    inversePrimary: extract("inversePrimary"),
    primaryFixed: extract("primaryFixed"),
    primaryFixedDim: extract("primaryFixedDim"),
    onPrimaryFixed: extract("onPrimaryFixed"),
    onPrimaryFixedVariant: extract("onPrimaryFixedVariant"),
    secondaryFixed: extract("secondaryFixed"),
    secondaryFixedDim: extract("secondaryFixedDim"),
    onSecondaryFixed: extract("onSecondaryFixed"),
    onSecondaryFixedVariant: extract("onSecondaryFixedVariant"),
    tertiaryFixed: extract("tertiaryFixed"),
    tertiaryFixedDim: extract("tertiaryFixedDim"),
    onTertiaryFixed: extract("onTertiaryFixed"),
    onTertiaryFixedVariant: extract("onTertiaryFixedVariant"),
  };
};
