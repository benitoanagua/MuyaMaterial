import { describe, it } from "vitest";
import { createDynamicScheme } from "../src/index";
import { generateTerminalColors } from "../src/theme/terminal-scheme";
import { defaultThemeConfig, themeVariants } from "../src/theme/theme-config.js";
import chalk from "chalk";

chalk.level = 3;

// Helper function to determine if a background color is light or dark
const isLightColor = (hexColor) => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance using ITU-R BT.709 formula
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
  // Return true if color is light (arbitrary threshold)
  return luminance > 128;
};

// Helper function to create colored blocks with good contrast text
const colorBlock = (bgColor, text, width = 32) => {
  const textColor = isLightColor(bgColor) ? '#000000' : '#FFFFFF';
  // Pad the text to ensure consistent width
  const paddedText = text.padEnd(width);
  return chalk.bgHex(bgColor).hex(textColor)(` ${paddedText} `);
};

// Generate all theme schemes
const themeSchemes = themeVariants.map(variant => {
  const scheme = createDynamicScheme({
    isDark: variant.isDark,
    contrastLevel: variant.contrastLevel,
    seedColorType: variant.seedColor,
  });
  
  const terminalColors = generateTerminalColors({
    isDark: variant.isDark,
    seedColorType: variant.seedColor,
    themeConfig: defaultThemeConfig,
  });
  
  return {
    name: variant.name,
    scheme,
    terminalColors
  };
});

describe("📊 Muya Material - Theme Comparison Table", () => {
  it("Dynamic Schemes Complete Colors Comparison", () => {
    console.log(chalk.bold.underline("\n🎨 Dynamic Schemes - Complete Colors"));
    
    // Header row with consistent width
    const header = themeSchemes.map(theme => 
      chalk.bold(theme.name.padEnd(32))
    ).join(' | ');
    console.log(chalk.dim('---'));
    console.log(header);
    console.log(chalk.dim('---'));
    
    // Define ALL dynamic scheme colors in the exact order specified
    const allColors = [
      { label: 'primary', getter: (scheme) => scheme.primary },
      { label: 'onPrimary', getter: (scheme) => scheme.onPrimary },
      { label: 'primaryContainer', getter: (scheme) => scheme.primaryContainer },
      { label: 'onPrimaryContainer', getter: (scheme) => scheme.onPrimaryContainer },
      { label: 'secondary', getter: (scheme) => scheme.secondary },
      { label: 'onSecondary', getter: (scheme) => scheme.onSecondary },
      { label: 'secondaryContainer', getter: (scheme) => scheme.secondaryContainer },
      { label: 'onSecondaryContainer', getter: (scheme) => scheme.onSecondaryContainer },
      { label: 'tertiary', getter: (scheme) => scheme.tertiary },
      { label: 'onTertiary', getter: (scheme) => scheme.onTertiary },
      { label: 'tertiaryContainer', getter: (scheme) => scheme.tertiaryContainer },
      { label: 'onTertiaryContainer', getter: (scheme) => scheme.onTertiaryContainer },
      { label: 'error', getter: (scheme) => scheme.error },
      { label: 'onError', getter: (scheme) => scheme.onError },
      { label: 'errorContainer', getter: (scheme) => scheme.errorContainer },
      { label: 'onErrorContainer', getter: (scheme) => scheme.onErrorContainer },
      { label: 'background', getter: (scheme) => scheme.background },
      { label: 'onBackground', getter: (scheme) => scheme.onBackground },
      { label: 'surface', getter: (scheme) => scheme.surface },
      { label: 'surfaceDim', getter: (scheme) => scheme.surfaceDim },
      { label: 'surfaceBright', getter: (scheme) => scheme.surfaceBright },
      { label: 'surfaceContainerLowest', getter: (scheme) => scheme.surfaceContainerLowest },
      { label: 'surfaceContainerLow', getter: (scheme) => scheme.surfaceContainerLow },
      { label: 'surfaceContainer', getter: (scheme) => scheme.surfaceContainer },
      { label: 'surfaceContainerHigh', getter: (scheme) => scheme.surfaceContainerHigh },
      { label: 'surfaceContainerHighest', getter: (scheme) => scheme.surfaceContainerHighest },
      { label: 'onSurface', getter: (scheme) => scheme.onSurface },
      { label: 'surfaceVariant', getter: (scheme) => scheme.surfaceVariant },
      { label: 'onSurfaceVariant', getter: (scheme) => scheme.onSurfaceVariant },
      { label: 'outline', getter: (scheme) => scheme.outline },
      { label: 'outlineVariant', getter: (scheme) => scheme.outlineVariant },
      { label: 'shadow', getter: (scheme) => scheme.shadow },
      { label: 'scrim', getter: (scheme) => scheme.scrim },
      { label: 'inverseSurface', getter: (scheme) => scheme.inverseSurface },
      { label: 'inverseOnSurface', getter: (scheme) => scheme.inverseOnSurface },
      { label: 'inversePrimary', getter: (scheme) => scheme.inversePrimary },
    ];
    
    // Display each color row
    allColors.forEach(color => {
      const row = themeSchemes.map(theme => 
        colorBlock(color.getter(theme.scheme), `${color.label}: ${color.getter(theme.scheme)}`)
      ).join(' | ');
      console.log(row);
    });
  });
  
  it("Terminal Schemes Complete Colors Comparison", () => {
    console.log(chalk.bold.underline("\n💻 Terminal Schemes - Complete Colors"));
    
    // Header row with consistent width
    const header = themeSchemes.map(theme => 
      chalk.bold(theme.name.padEnd(32))
    ).join(' | ');
    console.log(chalk.dim('---'));
    console.log(header);
    console.log(chalk.dim('---'));
    
    // Define ALL terminal colors as generated in terminal-scheme.js
    const allTerminalColors = [
      // Normal colors
      { label: 'black', getter: (colors) => colors.normal.black },
      { label: 'red', getter: (colors) => colors.normal.red },
      { label: 'green', getter: (colors) => colors.normal.green },
      { label: 'yellow', getter: (colors) => colors.normal.yellow },
      { label: 'blue', getter: (colors) => colors.normal.blue },
      { label: 'magenta', getter: (colors) => colors.normal.magenta },
      { label: 'cyan', getter: (colors) => colors.normal.cyan },
      { label: 'white', getter: (colors) => colors.normal.white },
      
      // Bright colors
      { label: 'brightBlack', getter: (colors) => colors.bright.black },
      { label: 'brightRed', getter: (colors) => colors.bright.red },
      { label: 'brightGreen', getter: (colors) => colors.bright.green },
      { label: 'brightYellow', getter: (colors) => colors.bright.yellow },
      { label: 'brightBlue', getter: (colors) => colors.bright.blue },
      { label: 'brightMagenta', getter: (colors) => colors.bright.magenta },
      { label: 'brightCyan', getter: (colors) => colors.bright.cyan },
      { label: 'brightWhite', getter: (colors) => colors.bright.white },
      
      // Dim colors
      { label: 'dimBlack', getter: (colors) => colors.dim.black },
      { label: 'dimRed', getter: (colors) => colors.dim.red },
      { label: 'dimGreen', getter: (colors) => colors.dim.green },
      { label: 'dimYellow', getter: (colors) => colors.dim.yellow },
      { label: 'dimBlue', getter: (colors) => colors.dim.blue },
      { label: 'dimMagenta', getter: (colors) => colors.dim.magenta },
      { label: 'dimCyan', getter: (colors) => colors.dim.cyan },
      { label: 'dimWhite', getter: (colors) => colors.dim.white },
    ];
    
    // Display each terminal color row
    allTerminalColors.forEach(color => {
      const row = themeSchemes.map(theme => 
        colorBlock(color.getter(theme.terminalColors), `${color.label}: ${color.getter(theme.terminalColors)}`)
      ).join(' | ');
      console.log(row);
    });
  });
});