export class AlacrittyColorsMapper {
  static mapSchemeToAlacritty(scheme) {
    return {
      primary: {
        background: scheme.surface,
        foreground: scheme.onSurface,
        dim_foreground: scheme.onSurfaceVariant,
        bright_foreground: scheme.inverseSurface,
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
        foreground: scheme.onSurfaceVariant,
        background: scheme.surfaceContainerHigh,
      },
      footer_bar: {
        background: scheme.surfaceContainerHighest,
        foreground: scheme.onSurface,
      },
      normal: {
        black: scheme.surfaceContainerLowest,
        red: scheme.error,
        green: scheme.tertiary,
        yellow: scheme.secondary,
        blue: scheme.primary,
        magenta: scheme.secondaryContainer,
        cyan: scheme.tertiaryContainer,
        white: scheme.onSurface,
      },
      bright: {
        black: scheme.surfaceContainerHigh,
        red: scheme.onErrorContainer,
        green: scheme.onTertiaryContainer,
        yellow: scheme.onSecondaryContainer,
        blue: scheme.onPrimaryContainer,
        magenta: scheme.tertiary,
        cyan: scheme.secondary,
        white: scheme.inverseSurface,
      },
      dim: {
        black: scheme.surface,
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
