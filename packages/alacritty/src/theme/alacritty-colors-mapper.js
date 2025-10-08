export class AlacrittyColorsMapper {
  static mapSchemeToAlacritty(scheme) {
    return {
      primary: {
        background: scheme.background,
        foreground: scheme.onBackground,
        dim_foreground: scheme.onSurfaceVariant,
        bright_foreground: scheme.onSurface,
      },
      cursor: {
        text: scheme.background,
        cursor: scheme.primary,
      },
      vi_mode_cursor: {
        text: scheme.background,
        cursor: scheme.secondary,
      },
      selection: {
        text: scheme.onPrimaryContainer,
        background: scheme.primaryContainer,
      },
      search: {
        matches: {
          foreground: scheme.onTertiary,
          background: scheme.tertiaryContainer,
        },
        focused_match: {
          foreground: scheme.onPrimary,
          background: scheme.primary,
        },
      },
      hints: {
        start: {
          foreground: scheme.background,
          background: scheme.tertiary,
        },
        end: {
          foreground: scheme.background,
          background: scheme.primaryContainer,
        },
      },
      line_indicator: {
        foreground: scheme.primary,
        background: scheme.surfaceContainer,
      },
      footer_bar: {
        background: scheme.surfaceContainerHigh,
        foreground: scheme.onSurface,
      },
      normal: {
        black: scheme.surfaceContainerHighest,
        red: scheme.error,
        green: scheme.tertiary,
        yellow: scheme.secondary,
        blue: scheme.primary,
        magenta: scheme.tertiaryContainer,
        cyan: scheme.secondaryContainer,
        white: scheme.onSurfaceVariant,
      },
      bright: {
        black: scheme.surfaceContainerHigh,
        red: scheme.onErrorContainer,
        green: scheme.onTertiaryContainer,
        yellow: scheme.onSecondaryContainer,
        blue: scheme.onPrimaryContainer,
        magenta: scheme.tertiary,
        cyan: scheme.secondary,
        white: scheme.onSurface,
      },
      dim: {
        black: scheme.surfaceContainer,
        red: scheme.errorContainer,
        green: scheme.tertiaryContainer,
        yellow: scheme.secondaryContainer,
        blue: scheme.primaryContainer,
        magenta: scheme.surfaceVariant,
        cyan: scheme.outlineVariant,
        white: scheme.outline,
      },
    };
  }
}
