import {
  argbFromHex,
  hexFromArgb,
  MaterialDynamicColors,
  Hct,
  SchemeTonalSpot,
  SchemeNeutral,
  SchemeVibrant,
  SchemeExpressive,
  SchemeMonochrome,
  SchemeContent,
  SchemeFidelity,
  SchemeRainbow,
  SchemeFruitSalad,
} from "@material/material-color-utilities";

import { getThemeConfig, defaultThemeConfig } from "./theme-config.js";

const SCHEME_CONSTRUCTORS = {
  TONAL_SPOT: SchemeTonalSpot,
  NEUTRAL: SchemeNeutral,
  VIBRANT: SchemeVibrant,
  EXPRESSIVE: SchemeExpressive,
  MONOCHROME: SchemeMonochrome,
  CONTENT: SchemeContent,
  FIDELITY: SchemeFidelity,
  RAINBOW: SchemeRainbow,
  FRUIT_SALAD: SchemeFruitSalad,
};

const getSeedColor = (seedColorType, themeConfig) => {
  const colorMap = {
    default: themeConfig.seedColorDefault,
    complement: themeConfig.seedColorComplement,
  };

  return colorMap[seedColorType] || themeConfig.seedColorDefault;
};

const getSchemeForVariant = (variant, isDark, contrastLevel, seedColor) => {
  const sourceColorArgb = argbFromHex(seedColor);
  const sourceColorHct = Hct.fromInt(sourceColorArgb);
  const SchemeConstructor = SCHEME_CONSTRUCTORS[variant] || SchemeTonalSpot;

  return new SchemeConstructor(sourceColorHct, isDark, contrastLevel);
};

export const createDynamicScheme = ({
  isDark,
  contrastLevel,
  seedColorType = "default",
  themeConfig = null,
}) => {
  const config = themeConfig ? getThemeConfig(themeConfig) : defaultThemeConfig;

  const seedColor = getSeedColor(seedColorType, config);
  const scheme = getSchemeForVariant(
    config.variant,
    isDark,
    contrastLevel,
    seedColor
  );

  const extract = (prop) => {
    try {
      const color = MaterialDynamicColors[prop]?.getArgb(scheme);
      return hexFromArgb(color);
    } catch {
      return "#FF00FF";
    }
  };

  return {
    isDark,
    contrastLevel,
    seedColor,
    seedColorType,
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
  };
};
