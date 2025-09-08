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
} from "@material/material-color-utilities";

import { themeConfig } from "./theme-config.js";

const sourceColorArgb = argbFromHex(themeConfig.seedColor);

// Mapeo de nombres de variante a constructores de esquema
const SCHEME_CONSTRUCTORS = {
  TONAL_SPOT: SchemeTonalSpot,
  NEUTRAL: SchemeNeutral,
  VIBRANT: SchemeVibrant,
  EXPRESSIVE: SchemeExpressive,
  MONOCHROME: SchemeMonochrome,
  CONTENT: SchemeContent,
  FIDELITY: SchemeFidelity,
};

// Función para obtener el esquema según la variante
const getSchemeForVariant = (variant, isDark, contrastLevel) => {
  const sourceColorHct = Hct.fromInt(sourceColorArgb);
  const SchemeConstructor = SCHEME_CONSTRUCTORS[variant] || SchemeTonalSpot;

  return new SchemeConstructor(sourceColorHct, isDark, contrastLevel);
};

export const createDynamicScheme = ({ isDark, contrastLevel }) => {
  const scheme = getSchemeForVariant(
    themeConfig.variant,
    isDark,
    contrastLevel
  );

  const extract = (prop) => {
    try {
      const color = MaterialDynamicColors[prop]?.getArgb(scheme);
      return hexFromArgb(color);
    } catch {
      return "#FF00FF"; // Color de fallback (magenta)
    }
  };

  return {
    isDark,
    contrastLevel,
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
