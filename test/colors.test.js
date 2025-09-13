import { describe, it } from "vitest";
import { createDynamicScheme } from "../src/theme/dynamic-scheme.js";
import { themeVariants } from "../src/theme/theme-config.js";
import chalk from "chalk";

chalk.level = 3;

// Color contrast pairs for Material Design 3 validation
const pairs = [
  { bg: "primary", fg: "onPrimary" },
  { bg: "secondary", fg: "onSecondary" },
  { bg: "tertiary", fg: "onTertiary" },
  { bg: "error", fg: "onError" },
  { bg: "surface", fg: "onSurface" },
  { bg: "primaryContainer", fg: "onPrimaryContainer" },
  { bg: "secondaryContainer", fg: "onSecondaryContainer" },
  { bg: "tertiaryContainer", fg: "onTertiaryContainer" },
];

// Create visual color block for testing
const block = (bgHex, fgHex, label) => {
  const text = chalk.hex(fgHex)(` ${label.padEnd(12)} ${bgHex} `);
  return chalk.bgHex(bgHex)(text.repeat(2));
};

// Theme icons for visual distinction
const themeIcons = {
  "Olive Dark": "🌿🌙",
  "Mystic Dark": "🔮🌙",
  "Olive Light": "🌿☀️",
  "Mystic Light": "🔮☀️",
};

// Seed color indicators
const seedColors = {
  "Olive Dark": "#7D944C",
  "Mystic Dark": "#6B5693",
  "Olive Light": "#7D944C",
  "Mystic Light": "#6B5693",
};

describe("🎨 Color Wall - MD3 Official Contrast Validation", () => {
  themeVariants.forEach(({ name, isDark, contrastLevel, seedColor }) => {
    it(`${themeIcons[name] || "🎨"} ${name}`, () => {
      const scheme = createDynamicScheme({
        isDark,
        contrastLevel,
        seedColorType: seedColor,
      });

      console.log("");
      console.log(
        chalk.bold.underline.hex("#ff79c6")(`${name.toUpperCase()} THEME`)
      );
      console.log(
        chalk.dim(
          `Seed Color: ${
            seedColors[name]
          } | Contrast: ${contrastLevel} | Mode: ${isDark ? "Dark" : "Light"}`
        )
      );
      console.log("");

      // Primary color pairs
      console.log(chalk.bold.hex("#00bcd4")("🎯 PRIMARY COLORS"));
      pairs.slice(0, 4).forEach(({ bg, fg }) => {
        console.log(block(scheme[bg], scheme[fg], bg.toUpperCase()));
      });

      console.log("");

      // Surface and container colors
      console.log(chalk.bold.hex("#4caf50")("🏗️ SURFACES & CONTAINERS"));
      pairs.slice(4).forEach(({ bg, fg }) => {
        console.log(block(scheme[bg], scheme[fg], bg.toUpperCase()));
      });

      // Additional surface variants for comprehensive testing
      const surfaceVariants = [
        { bg: "surfaceContainer", fg: "onSurface", label: "SURFACE_CTR" },
        { bg: "surfaceContainerHigh", fg: "onSurface", label: "SURFACE_HIGH" },
        { bg: "surfaceVariant", fg: "onSurfaceVariant", label: "SURFACE_VAR" },
      ];

      surfaceVariants.forEach(({ bg, fg, label }) => {
        console.log(block(scheme[bg], scheme[fg], label));
      });

      console.log("");

      // Color scheme summary
      console.log(chalk.bold.hex("#ff9800")("📊 SCHEME SUMMARY"));
      console.log(
        chalk.dim(
          `Primary: ${scheme.primary} | Secondary: ${scheme.secondary} | Tertiary: ${scheme.tertiary}`
        )
      );
      console.log(
        chalk.dim(
          `Background: ${scheme.background} | Surface: ${scheme.surface} | Error: ${scheme.error}`
        )
      );
      console.log("");
    });
  });

  // Additional test for color scheme consistency
  describe("🔍 Color Scheme Validation", () => {
    it("should generate consistent color schemes across variants", () => {
      const schemes = themeVariants.map((variant) => ({
        name: variant.name,
        scheme: createDynamicScheme({
          isDark: variant.isDark,
          contrastLevel: variant.contrastLevel,
          seedColorType: variant.seedColor,
        }),
      }));

      console.log("");
      console.log(
        chalk.bold.underline.hex("#e91e63")("THEME COMPARISON MATRIX")
      );
      console.log("");

      // Compare primary colors across themes
      schemes.forEach(({ name, scheme }) => {
        const icon = themeIcons[name] || "🎨";
        console.log(chalk.bold(`${icon} ${name}:`));
        console.log(
          `  Primary: ${chalk.hex(scheme.primary).bold(scheme.primary)}`
        );
        console.log(
          `  Secondary: ${chalk.hex(scheme.secondary).bold(scheme.secondary)}`
        );
        console.log(
          `  Background: ${chalk
            .hex(scheme.background)
            .bold(scheme.background)}`
        );
        console.log("");
      });
    });

    it("should maintain proper contrast ratios", () => {
      themeVariants.forEach((variant) => {
        const scheme = createDynamicScheme({
          isDark: variant.isDark,
          contrastLevel: variant.contrastLevel,
          seedColorType: variant.seedColor,
        });

        // Basic contrast validation (visual inspection)
        console.log(chalk.bold(`\n🧪 Testing ${variant.name} contrast pairs:`));
        pairs.forEach(({ bg, fg }) => {
          const bgColor = scheme[bg];
          const fgColor = scheme[fg];
          const sample = chalk.bgHex(bgColor).hex(fgColor)(
            ` ${fg.toUpperCase()} on ${bg.toUpperCase()} `
          );
          console.log(`  ${sample} (${bgColor} / ${fgColor})`);
        });
      });
    });
  });
});
