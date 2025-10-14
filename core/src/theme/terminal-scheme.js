import {
  Hct,
  argbFromHex,
  hexFromArgb,
} from "@material/material-color-utilities";
import { getThemeConfig, defaultThemeConfig } from "./theme-config.js";

/**
 * Material Design 3 ANSI color identity preservation
 */
const MD3_ANSI_COLORS = {
  black: { hue: 0, chroma: 0, tone: 10 },
  red: { hue: 10, chroma: 84, tone: 50 },
  green: { hue: 145, chroma: 48, tone: 50 },
  yellow: { hue: 80, chroma: 70, tone: 60 },
  blue: { hue: 245, chroma: 80, tone: 50 },
  magenta: { hue: 330, chroma: 68, tone: 50 },
  cyan: { hue: 190, chroma: 48, tone: 50 },
  white: { hue: 0, chroma: 0, tone: 95 },
};

/**
 * Material Design 3 tone adjustments for dark/light themes
 */
const MD3_TONE_ADJUSTMENTS = {
  dark: {
    normal: {
      chromatic: 70,
      neutral: 80,
    },
    bright: {
      chromatic: 85,
      neutral: 95,
    },
    dim: {
      chromatic: 50,
      neutral: 60,
    },
  },
  light: {
    normal: {
      chromatic: 40,
      neutral: 20,
    },
    bright: {
      chromatic: 30,
      neutral: 10,
    },
    dim: {
      chromatic: 60,
      neutral: 40,
    },
  },
};

/**
 * Get seed color with validation
 */
const getSeedColor = (seedColorType, themeConfig) => {
  const colorMap = {
    default: themeConfig.seedColorDefault,
    complement: themeConfig.seedColorComplement,
  };
  return colorMap[seedColorType] || themeConfig.seedColorDefault;
};

/**
 * Apply subtle harmonization with seed color
 */
const harmonizeWithSeed = (baseHct, seedHct, isDark) => {
  const hueShift = 5;
  const chromaInfluence = 0.03;

  let hueDiff = seedHct.hue - baseHct.hue;
  if (hueDiff > 180) hueDiff -= 360;
  if (hueDiff < -180) hueDiff += 360;

  let finalHue = baseHct.hue + hueDiff * (hueShift / 180);
  finalHue = (finalHue + 360) % 360;

  const finalChroma =
    baseHct.chroma * (1 - chromaInfluence) + seedHct.chroma * chromaInfluence;

  return { hue: finalHue, chroma: Math.min(finalChroma, 100) };
};

/**
 * Generate single ANSI color with MD3 compliance
 */
const generateAnsiColor = (colorName, brightness, seedHct, isDark) => {
  const baseColor = MD3_ANSI_COLORS[colorName];
  const isNeutral = colorName === "black" || colorName === "white";
  const themeMode = isDark ? "dark" : "light";

  const baseTone =
    MD3_TONE_ADJUSTMENTS[themeMode][brightness][
      isNeutral ? "neutral" : "chromatic"
    ];

  if (isNeutral) {
    const neutralHue = seedHct.hue;
    const neutralChroma = isDark ? 4 : 2;

    let tone = baseTone;

    if (colorName === "black") {
      if (brightness === "bright") tone = isDark ? 30 : 15;
      else if (brightness === "dim") tone = isDark ? 10 : 5;
      else tone = isDark ? 20 : 10;
    } else {
      if (brightness === "bright") tone = isDark ? 100 : 98;
      else if (brightness === "dim") tone = isDark ? 80 : 90;
      else tone = isDark ? 95 : 95;
    }

    return hexFromArgb(Hct.from(neutralHue, neutralChroma, tone).toInt());
  }

  const baseHct = Hct.from(baseColor.hue, baseColor.chroma, baseTone);
  const { hue, chroma } = harmonizeWithSeed(baseHct, seedHct, isDark);

  let finalTone = baseTone;

  const colorAdjustments = {
    red: 0,
    green: isDark ? 5 : -5,
    yellow: isDark ? 8 : -3,
    blue: 0,
    magenta: isDark ? 3 : -3,
    cyan: isDark ? 5 : -5,
  };

  finalTone += colorAdjustments[colorName] || 0;

  if (isDark) {
    finalTone = Math.max(finalTone, 40);
  } else {
    finalTone = Math.min(finalTone, 70);
  }

  return hexFromArgb(Hct.from(hue, chroma, finalTone).toInt());
};

/**
 * Generate complete terminal color scheme (MD3 compliant)
 */
export const generateTerminalColors = ({
  isDark = true,
  seedColorType = "default",
  themeConfig = null,
}) => {
  const config = themeConfig ? getThemeConfig(themeConfig) : defaultThemeConfig;
  const finalSeedColor = getSeedColor(seedColorType, config);
  const seedHct = Hct.fromInt(argbFromHex(finalSeedColor));

  const result = {
    normal: {},
    bright: {},
    dim: {},
    _metadata: {
      theme: isDark ? "dark" : "light",
      seedColor: finalSeedColor,
      seedColorType,
      variant: config.variant,
      contrast: config.contrastLevel,
      standard: "Material Design 3",
      wcagCompliance: "AA",
    },
  };

  const ansiColorNames = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
  ];

  ansiColorNames.forEach((colorName) => {
    result.normal[colorName] = generateAnsiColor(
      colorName,
      "normal",
      seedHct,
      isDark
    );
    result.bright[colorName] = generateAnsiColor(
      colorName,
      "bright",
      seedHct,
      isDark
    );
    result.dim[colorName] = generateAnsiColor(
      colorName,
      "dim",
      seedHct,
      isDark
    );
  });

  return result;
};

/**
 * Generate terminal colors for multiple seeds
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
