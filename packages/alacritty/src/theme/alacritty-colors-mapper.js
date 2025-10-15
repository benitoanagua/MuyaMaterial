export class AlacrittyColorsMapper {
  static mapSchemeToAlacritty(scheme, terminalColors) {
    return {
      primary: {
        background: scheme.surface,
        foreground: scheme.onSurfaceVariant,
        dim_foreground: scheme.outline,
        bright_foreground: scheme.onSurface,
      },
      cursor: {
        text: scheme.onPrimary,
        cursor: scheme.primary,
      },
      vi_mode_cursor: {
        text: scheme.onSecondary,
        cursor: scheme.secondary,
      },
      selection: {
        text: scheme.onPrimaryContainer,
        background: scheme.primaryContainer,
      },
      search: {
        matches: {
          foreground: scheme.onTertiaryContainer,
          background: scheme.tertiaryContainer,
        },
        focused_match: {
          foreground: scheme.onPrimary,
          background: scheme.primary,
        },
      },
      hints: {
        start: {
          foreground: scheme.onTertiary,
          background: scheme.tertiary,
        },
        end: {
          foreground: scheme.onSecondary,
          background: scheme.secondary,
        },
      },
      line_indicator: {
        foreground: scheme.outline,
        background: scheme.surfaceContainerHigh,
      },
      footer_bar: {
        background: scheme.surfaceContainerHighest,
        foreground: scheme.onSurface,
      },
      normal: {
        black: terminalColors.normal.black,
        red: terminalColors.normal.red,
        green: terminalColors.normal.green,
        yellow: terminalColors.normal.yellow,
        blue: terminalColors.normal.blue,
        magenta: terminalColors.normal.magenta,
        cyan: terminalColors.normal.cyan,
        white: scheme.onSurfaceVariant,
      },
      bright: {
        black: terminalColors.bright.black,
        red: terminalColors.bright.red,
        green: terminalColors.bright.green,
        yellow: terminalColors.bright.yellow,
        blue: terminalColors.bright.blue,
        magenta: terminalColors.bright.magenta,
        cyan: terminalColors.bright.cyan,
        white: scheme.outline,
      },
      dim: {
        black: terminalColors.dim.black,
        red: terminalColors.dim.red,
        green: terminalColors.dim.green,
        yellow: terminalColors.dim.yellow,
        blue: terminalColors.dim.blue,
        magenta: terminalColors.dim.magenta,
        cyan: terminalColors.dim.cyan,
        white: scheme.onSurface,
      },
    };
  }
}
