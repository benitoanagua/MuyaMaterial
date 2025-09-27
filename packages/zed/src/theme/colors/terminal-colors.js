export class TerminalColors {
  static mapTerminalColors(scheme) {
    return {
      "terminal.foreground": scheme.onSurface,
      "terminal.bright_foreground": scheme.onBackground,
      "terminal.dim_foreground": scheme.onSurfaceVariant,

      "terminal.ansi.black": scheme.surfaceContainerHigh,
      "terminal.ansi.red": scheme.error,
      "terminal.ansi.green": scheme.tertiary,
      "terminal.ansi.yellow": scheme.secondary,
      "terminal.ansi.blue": scheme.primary,
      "terminal.ansi.magenta": scheme.tertiaryContainer,
      "terminal.ansi.cyan": scheme.secondaryContainer,
      "terminal.ansi.white": scheme.onSurface,

      "terminal.ansi.bright_black": scheme.surfaceContainerHighest,
      "terminal.ansi.bright_red": scheme.onErrorContainer,
      "terminal.ansi.bright_green": scheme.onTertiaryContainer,
      "terminal.ansi.bright_yellow": scheme.onSecondaryContainer,
      "terminal.ansi.bright_blue": scheme.onPrimaryContainer,
      "terminal.ansi.bright_magenta": scheme.onSecondaryContainer,
      "terminal.ansi.bright_cyan": scheme.onTertiaryContainer,
      "terminal.ansi.bright_white": scheme.background,

      "terminal.ansi.dim_black": scheme.surfaceContainer,
      "terminal.ansi.dim_red": `${scheme.error}99`,
      "terminal.ansi.dim_green": `${scheme.tertiary}99`,
      "terminal.ansi.dim_yellow": `${scheme.secondary}99`,
      "terminal.ansi.dim_blue": `${scheme.primary}99`,
      "terminal.ansi.dim_magenta": `${scheme.tertiaryContainer}99`,
      "terminal.ansi.dim_cyan": `${scheme.secondaryContainer}99`,
      "terminal.ansi.dim_white": `${scheme.onSurface}99`,

      "terminal.ansi.background": scheme.surfaceDim,
    };
  }
}
