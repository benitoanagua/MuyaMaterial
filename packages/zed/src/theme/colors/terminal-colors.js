export class TerminalColors {
  static mapTerminalColors(scheme) {
    return {
      // Terminal core colors
      "terminal.background": scheme.surfaceContainerLowest,
      "terminal.foreground": scheme.onSurface,
      "terminal.bright_foreground": scheme.onBackground,
      "terminal.dim_foreground": scheme.onSurfaceVariant,

      // ANSI colors mapped to  semantic colors
      "terminal.ansi.black": scheme.surfaceVariant,
      "terminal.ansi.red": scheme.error,
      "terminal.ansi.green": scheme.tertiary,
      "terminal.ansi.yellow": scheme.tertiary,
      "terminal.ansi.blue": scheme.primary,
      "terminal.ansi.magenta": scheme.secondary,
      "terminal.ansi.cyan": scheme.tertiary,
      "terminal.ansi.white": scheme.onSurface,

      "terminal.ansi.bright_black": scheme.outline,
      "terminal.ansi.bright_red": scheme.error,
      "terminal.ansi.bright_green": scheme.tertiary,
      "terminal.ansi.bright_yellow": scheme.tertiary,
      "terminal.ansi.bright_blue": scheme.primary,
      "terminal.ansi.bright_magenta": scheme.secondary,
      "terminal.ansi.bright_cyan": scheme.tertiary,
      "terminal.ansi.bright_white": scheme.onBackground,

      // Terminal selection using primary container
      "terminal.selection.background": scheme.primaryContainer,
    };
  }
}
