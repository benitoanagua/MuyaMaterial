import { describe, it } from "vitest";
import { createDynamicScheme } from "../src/dynamicScheme.js";
import { themeVariants } from "../src/theme-config.js";
import chalk from "chalk";

chalk.level = 3;

const pairs = [
  { bg: "primary", fg: "onPrimary" },
  { bg: "secondary", fg: "onSecondary" },
  { bg: "tertiary", fg: "onTertiary" },
  { bg: "error", fg: "onError" },
  { bg: "surface", fg: "onSurface" },
];

const block = (bgHex, fgHex, label) => {
  const text = chalk.hex(fgHex)(` ${label.padEnd(9)} ${bgHex} `);
  return chalk.bgHex(bgHex)(text.repeat(3));
};

describe("🌈 Color Wall - Contraste Oficial MD3", () => {
  themeVariants.forEach(({ name, isDark, contrastLevel }) => {
    it(name, () => {
      const s = createDynamicScheme({ isDark, contrastLevel });

      console.log("");
      console.log(chalk.bold.underline.hex("#ff79c6")(name.toUpperCase()));
      console.log("");

      pairs.forEach(({ bg, fg }) => {
        console.log(block(s[bg], s[fg], bg.toUpperCase()));
      });

      console.log("");
    });
  });
});
