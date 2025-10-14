export class TerminalColors {
  static mapTerminalColors(scheme, term) {
    return {
      "terminal.foreground": scheme.onSurface,
      "terminal.bright_foreground": scheme.onBackground,
      "terminal.dim_foreground": scheme.onSurfaceVariant,

      "terminal.ansi.black": term.normal.black,
      "terminal.ansi.red": term.normal.red,
      "terminal.ansi.green": term.normal.green,
      "terminal.ansi.yellow": term.normal.yellow,
      "terminal.ansi.blue": term.normal.blue,
      "terminal.ansi.magenta": term.normal.magenta,
      "terminal.ansi.cyan": term.normal.cyan,
      "terminal.ansi.white": term.normal.white,

      "terminal.ansi.bright_black": term.bright.black,
      "terminal.ansi.bright_red": term.bright.red,
      "terminal.ansi.bright_green": term.bright.green,
      "terminal.ansi.bright_yellow": term.bright.yellow,
      "terminal.ansi.bright_blue": term.bright.blue,
      "terminal.ansi.bright_magenta": term.bright.magenta,
      "terminal.ansi.bright_cyan": term.bright.cyan,
      "terminal.ansi.bright_white": term.bright.white,

      "terminal.ansi.dim_black": term.dim.black,
      "terminal.ansi.dim_red": term.dim.red,
      "terminal.ansi.dim_green": term.dim.green,
      "terminal.ansi.dim_yellow": term.dim.yellow,
      "terminal.ansi.dim_blue": term.dim.blue,
      "terminal.ansi.dim_magenta": term.dim.magenta,
      "terminal.ansi.dim_cyan": term.dim.cyan,
      "terminal.ansi.dim_white": term.dim.white,

      "terminal.background": scheme.surfaceDim,
    };
  }
}
