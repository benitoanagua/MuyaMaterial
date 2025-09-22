export class TerminalColors {
  static mapTerminalColors(scheme) {
    return {
      "terminal.background": scheme.surfaceDim,
      "terminal.foreground": scheme.onSurface,
      "terminal.bright_foreground": scheme.onBackground,
      "terminal.dim_foreground": scheme.onSurfaceVariant,

      "terminal.ansi.black": scheme.surfaceContainerHigh,
      "terminal.ansi.red": scheme.error,
      "terminal.ansi.green": scheme.tertiary,
      "terminal.ansi.yellow": scheme.secondary,
      "terminal.ansi.blue": scheme.primary,
      "terminal.ansi.magenta": scheme.secondaryContainer,
      "terminal.ansi.cyan": scheme.tertiaryContainer,
      "terminal.ansi.white": scheme.onSurface,

      "terminal.ansi.bright_black": scheme.surfaceContainerHighest,
      "terminal.ansi.bright_red": scheme.onErrorContainer,
      "terminal.ansi.bright_green": scheme.onTertiaryContainer,
      "terminal.ansi.bright_yellow": scheme.onSecondaryContainer,
      "terminal.ansi.bright_blue": scheme.onPrimaryContainer,
      "terminal.ansi.bright_magenta": scheme.onSecondaryContainer,
      "terminal.ansi.bright_cyan": scheme.onTertiaryContainer,
      "terminal.ansi.bright_white": scheme.inverseOnSurface,

      "terminal.selection.background": scheme.primaryContainer,
      "terminal.cursor.foreground": scheme.inversePrimary,
      "terminal.cursor.background": scheme.onPrimary,
    };
  }
}
