import { describe, it } from "vitest";
import {
  generateTerminalColors,
  generateTerminalColorsForSeeds,
  getBothThemesForSeeds,
} from "../src/theme/terminal-scheme";
import {
  themeVariants,
  defaultThemeConfig,
} from "../src/theme/theme-config.js";
import chalk from "chalk";

chalk.level = 3;

const block = (color, label) => {
  const textColor =
    parseInt(color.replace("#", ""), 16) > 0x7fffff ? "#000000" : "#FFFFFF";
  const text = chalk.hex(textColor)(` ${label.padEnd(8)} ${color} `);
  return chalk.bgHex(color)(text);
};

const getTempEmoji = (temp) => {
  return temp === "warm" ? "🔥" : temp === "cool" ? "❄️" : "⚪";
};

describe("🎨 Terminal Colors - Material 3", () => {
  describe("🌈 Theme Variants", () => {
    it("should show all 4 theme variants", () => {
      console.log("");
      console.log(chalk.bold.underline.hex("#ff79c6")("ALL THEME VARIANTS"));
      console.log("");

      themeVariants.forEach(({ name, isDark, seedColor }) => {
        const colors = generateTerminalColors({
          isDark,
          seedColorType: seedColor,
          themeConfig: defaultThemeConfig,
        });

        const icon = isDark ? "🌙" : "☀️";
        const temp = getTempEmoji(colors._metadata.seedTemperature);

        console.log(
          chalk.bold(`${icon} ${name} ${temp} (${colors._metadata.seedColor})`)
        );

        // Show only normal variants in compact format
        const colorList = ["red", "green", "yellow", "blue", "magenta", "cyan"];
        const line = colorList
          .map((c) => block(colors.normal[c], c.substring(0, 3).toUpperCase()))
          .join(" ");
        console.log(`  ${line}`);
        console.log("");
      });
    });
  });

  describe("🌡️ Temperature Impact", () => {
    it("warm vs cool seeds on same colors", () => {
      const warmSeed = "#C96B52";
      const coolSeed = "#4ECDC4";

      const warm = generateTerminalColors({
        isDark: true,
        seedColorType: "default",
        themeConfig: {
          ...defaultThemeConfig,
          seedColorDefault: warmSeed,
        },
      });

      const cool = generateTerminalColors({
        isDark: true,
        seedColorType: "default",
        themeConfig: {
          ...defaultThemeConfig,
          seedColorDefault: coolSeed,
        },
      });

      console.log("");
      console.log(
        chalk.bold.underline.hex("#ff6b6b")("TEMPERATURE COMPARISON")
      );
      console.log("");

      ["red", "green", "blue", "yellow"].forEach((color) => {
        console.log(chalk.bold(`${color.toUpperCase()}:`));
        console.log(`  🔥 ${block(warm.normal[color], "WARM")}`);
        console.log(`  ❄️  ${block(cool.normal[color], "COOL")}`);
        console.log("");
      });
    });
  });

  describe("🎨 Multi-Seed Palette", () => {
    it("4 seeds comparison", () => {
      const seeds = {
        olive: "#7D944C",
        mystic: "#6B5693",
        ruby: "#FF6B6B",
        ocean: "#4ECDC4",
      };

      const allColors = generateTerminalColorsForSeeds({
        isDark: true,
        themeConfig: defaultThemeConfig,
        seedColors: seeds,
      });

      console.log("");
      console.log(chalk.bold.underline.hex("#9c27b0")("MULTI-SEED COMPARISON"));
      console.log("");

      ["red", "green", "blue"].forEach((colorName) => {
        console.log(chalk.bold(`${colorName.toUpperCase()}:`));
        Object.entries(allColors).forEach(([seedName, colors]) => {
          const temp = getTempEmoji(colors._metadata.seedTemperature);
          console.log(
            `  ${temp} ${block(
              colors.normal[colorName],
              seedName.toUpperCase()
            )}`
          );
        });
        console.log("");
      });
    });
  });

  describe("✨ Brightness Levels", () => {
    it("dim, normal, bright variants", () => {
      const colors = generateTerminalColors({
        isDark: true,
        seedColorType: "default",
        themeConfig: defaultThemeConfig,
      });

      console.log("");
      console.log(chalk.bold.underline.hex("#4caf50")("BRIGHTNESS VARIANTS"));
      console.log("");

      ["red", "green", "blue", "yellow"].forEach((color) => {
        console.log(chalk.bold(`${color.toUpperCase()}:`));
        console.log(`  Dim:    ${block(colors.dim[color], "DIM")}`);
        console.log(`  Normal: ${block(colors.normal[color], "NORMAL")}`);
        console.log(`  Bright: ${block(colors.bright[color], "BRIGHT")}`);
        console.log("");
      });
    });
  });

  describe("🌓 Light vs Dark", () => {
    it("theme comparison", () => {
      const dark = generateTerminalColors({
        isDark: true,
        seedColorType: "default",
        themeConfig: defaultThemeConfig,
      });

      const light = generateTerminalColors({
        isDark: false,
        seedColorType: "default",
        themeConfig: defaultThemeConfig,
      });

      console.log("");
      console.log(chalk.bold.underline.hex("#2196f3")("LIGHT vs DARK THEMES"));
      console.log("");

      ["red", "green", "blue", "yellow"].forEach((color) => {
        console.log(chalk.bold(`${color.toUpperCase()}:`));
        console.log(`  🌙 ${block(dark.normal[color], "DARK")}`);
        console.log(`  ☀️  ${block(light.normal[color], "LIGHT")}`);
        console.log("");
      });
    });
  });

  describe("⚫⚪ Neutrals", () => {
    it("black and white across seeds", () => {
      const seeds = {
        warm: "#C96B52",
        cool: "#4ECDC4",
        neutral: "#7D944C",
      };

      const dark = generateTerminalColorsForSeeds({
        isDark: true,
        themeConfig: defaultThemeConfig,
        seedColors: seeds,
      });

      console.log("");
      console.log(chalk.bold.underline.hex("#9e9e9e")("NEUTRALS OVERVIEW"));
      console.log("");

      console.log(chalk.bold("⚫ BLACK:"));
      Object.entries(dark).forEach(([seedName, colors]) => {
        const temp = getTempEmoji(colors._metadata.seedTemperature);
        console.log(
          `  ${temp} ${block(colors.normal.black, seedName.toUpperCase())}`
        );
      });

      console.log("");
      console.log(chalk.bold("⚪ WHITE:"));
      Object.entries(dark).forEach(([seedName, colors]) => {
        const temp = getTempEmoji(colors._metadata.seedTemperature);
        console.log(
          `  ${temp} ${block(colors.normal.white, seedName.toUpperCase())}`
        );
      });
      console.log("");
    });
  });

  describe("🎯 Complete Palette", () => {
    it("all colors for primary theme", () => {
      const colors = generateTerminalColors({
        isDark: true,
        seedColorType: "default",
        themeConfig: defaultThemeConfig,
      });

      console.log("");
      console.log(
        chalk.bold.underline.hex("#00bcd4")(
          "COMPLETE ANSI PALETTE (Olive Dark)"
        )
      );
      console.log("");

      const allColors = [
        "black",
        "red",
        "green",
        "yellow",
        "blue",
        "magenta",
        "cyan",
        "white",
      ];

      allColors.forEach((color) => {
        console.log(block(colors.normal[color], color.toUpperCase()));
      });

      console.log("");
      console.log(chalk.bold.hex("#e91e63")("📊 Summary"));
      console.log(
        chalk.dim(
          `Seed: ${colors._metadata.seedColor} | Temp: ${colors._metadata.seedTemperature} | Theme: ${colors._metadata.theme}`
        )
      );
      console.log("");
    });
  });
});
