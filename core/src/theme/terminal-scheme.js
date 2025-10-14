import {
  Hct,
  argbFromHex,
  hexFromArgb,
} from "@material/material-color-utilities";
import { getThemeConfig, defaultThemeConfig } from "./theme-config.js";

/**
 * Detect if a color is warm or cool based on hue
 */
const getColorTemperature = (hue) => {
  return (hue >= 0 && hue <= 60) || (hue >= 330 && hue <= 360)
    ? "warm"
    : "cool";
};

/**
 * Get base ANSI color in HCT space with proper identity preservation
 * Based on Material Design 3 color system
 */
const getBaseColorHct = (colorName) => {
  const baseColors = {
    black: { hue: 0, chroma: 0, tone: 0 },
    red: { hue: 10, chroma: 100, tone: 53 },
    green: { hue: 145, chroma: 48, tone: 53 },
    yellow: { hue: 80, chroma: 78, tone: 60 },
    blue: { hue: 245, chroma: 80, tone: 53 },
    magenta: { hue: 330, chroma: 75, tone: 53 },
    cyan: { hue: 190, chroma: 48, tone: 53 },
    white: { hue: 0, chroma: 0, tone: 100 },
  };

  return baseColors[colorName];
};

/**
 * Get seed color based on type
 */
const getSeedColor = (seedColorType, themeConfig) => {
  const colorMap = {
    default: themeConfig.seedColorDefault,
    complement: themeConfig.seedColorComplement,
  };

  return colorMap[seedColorType] || themeConfig.seedColorDefault;
};

/**
 * Apply subtle seed influence while preserving color identity
 * Material Design 3 approach
 */
const applySeededVariation = (baseHct, seedHct, brightness, isDark) => {
  const hueInfluence = 0.04;

  let finalHue = baseHct.hue * (1 - hueInfluence) + seedHct.hue * hueInfluence;

  const hueTolerance = 12;
  if (Math.abs(finalHue - baseHct.hue) > hueTolerance) {
    finalHue = baseHct.hue + Math.sign(finalHue - baseHct.hue) * hueTolerance;
  }
  finalHue = finalHue % 360;

  let chroma = baseHct.chroma;
  if (brightness === "bright") {
    chroma = Math.min(baseHct.chroma * 1.12, 100);
  } else if (brightness === "dim") {
    chroma = Math.max(baseHct.chroma * 0.85, 25);
  }

  const seedChromaInfluence = 0.05;
  chroma =
    chroma * (1 - seedChromaInfluence) + seedHct.chroma * seedChromaInfluence;

  let tone;
  if (isDark) {
    if (brightness === "bright") {
      tone = Math.min(baseHct.tone + 32, 87);
    } else if (brightness === "dim") {
      tone = Math.max(baseHct.tone - 18, 30);
    } else {
      tone = Math.min(baseHct.tone + 17, 75);
    }
  } else {
    if (brightness === "bright") {
      tone = Math.max(baseHct.tone - 32, 25);
    } else if (brightness === "dim") {
      tone = Math.min(baseHct.tone + 18, 65);
    } else {
      tone = Math.max(baseHct.tone - 17, 35);
    }
  }

  return Hct.from(finalHue, chroma, tone);
};

/**
 * Generate terminal colors with Material 3 principles
 * Uses same pattern as createDynamicScheme
 */
export const generateTerminalColors = ({
  isDark = true,
  seedColorType = "default",
  themeConfig = null,
}) => {
  const config = themeConfig ? getThemeConfig(themeConfig) : defaultThemeConfig;
  const finalSeedColor = getSeedColor(seedColorType, config);

  const seedHct = Hct.fromInt(argbFromHex(finalSeedColor));
  const seedTemp = getColorTemperature(seedHct.hue);

  const ansiColors = {
    black: "neutral",
    red: "warm",
    green: "cool",
    yellow: "warm",
    blue: "cool",
    magenta: "cool",
    cyan: "cool",
    white: "neutral",
  };

  const generateColorVariant = (colorName, brightness) => {
    const baseTemp = ansiColors[colorName];

    if (colorName === "black" || colorName === "white") {
      let tone;

      if (colorName === "black") {
        tone =
          brightness === "bright"
            ? isDark
              ? 28
              : 18
            : brightness === "dim"
            ? isDark
              ? 8
              : 4
            : isDark
            ? 17
            : 10;
      } else {
        tone =
          brightness === "bright"
            ? isDark
              ? 100
              : 100
            : brightness === "dim"
            ? isDark
              ? 75
              : 88
            : isDark
            ? 93
            : 97;
      }

      const hueShift = seedTemp === "warm" ? 20 : 280;
      return hexFromArgb(Hct.from(hueShift, 1, tone).toInt());
    }

    const baseHct = getBaseColorHct(colorName);
    const baseHctObj = Hct.from(baseHct.hue, baseHct.chroma, baseHct.tone);

    const variedHct = applySeededVariation(
      baseHctObj,
      seedHct,
      baseTemp,
      seedTemp,
      brightness,
      isDark
    );

    return hexFromArgb(variedHct.toInt());
  };

  const result = {
    normal: {},
    bright: {},
    dim: {},
    _metadata: {
      theme: isDark ? "dark" : "light",
      seedColor: finalSeedColor,
      seedColorType,
      seedTemperature: seedTemp,
      variant: config.variant,
      contrast: config.contrastLevel,
    },
  };

  Object.keys(ansiColors).forEach((colorName) => {
    result.normal[colorName] = generateColorVariant(colorName, "normal");
    result.bright[colorName] = generateColorVariant(colorName, "bright");
    result.dim[colorName] = generateColorVariant(colorName, "dim");
  });

  return result;
};

/**
 * Generate terminal colors for multiple seeds
 * Compatible with batch processing
 */
export const generateTerminalColorsForSeeds = ({
  isDark = true,
  themeConfig = null,
  seedColors = {},
}) => {
  const result = {};

  Object.entries(seedColors).forEach(([seedName, seedColor]) => {
    const tempConfig = {
      ...(themeConfig || defaultThemeConfig),
      seedColorDefault: seedColor,
    };

    result[seedName] = generateTerminalColors({
      isDark,
      seedColorType: "default",
      themeConfig: tempConfig,
    });
  });

  return result;
};

/**
 * Get both dark and light themes for multiple seeds
 * Convenience function for theme generation
 */
export const getBothThemesForSeeds = ({
  themeConfig = null,
  seedColors = {},
}) => ({
  dark: generateTerminalColorsForSeeds({
    isDark: true,
    themeConfig,
    seedColors,
  }),
  light: generateTerminalColorsForSeeds({
    isDark: false,
    themeConfig,
    seedColors,
  }),
});
