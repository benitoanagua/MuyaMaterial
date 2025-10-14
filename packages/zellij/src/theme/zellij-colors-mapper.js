import hexRgb from "hex-rgb";

export class ZellijColorsMapper {
  static mapSchemeToZellij(scheme, terminalColors) {
    return {
      // Text components
      text_unselected: {
        base: this.hexToRgb(scheme.onBackground),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.normal.blue),
        emphasis_1: this.hexToRgb(terminalColors.normal.green),
        emphasis_2: this.hexToRgb(terminalColors.normal.yellow),
        emphasis_3: this.hexToRgb(terminalColors.normal.red),
      },

      text_selected: {
        base: this.hexToRgb(scheme.onPrimaryContainer),
        background: this.hexToRgb(scheme.primaryContainer),
        emphasis_0: this.hexToRgb(terminalColors.bright.blue),
        emphasis_1: this.hexToRgb(terminalColors.bright.green),
        emphasis_2: this.hexToRgb(terminalColors.bright.yellow),
        emphasis_3: this.hexToRgb(terminalColors.bright.red),
      },

      // Ribbon components
      ribbon_unselected: {
        base: this.hexToRgb(scheme.onSurface),
        background: this.hexToRgb(scheme.surfaceContainerHigh),
        emphasis_0: this.hexToRgb(terminalColors.normal.cyan),
        emphasis_1: this.hexToRgb(scheme.onSurface),
        emphasis_2: this.hexToRgb(terminalColors.normal.magenta),
        emphasis_3: this.hexToRgb(terminalColors.normal.yellow),
      },

      ribbon_selected: {
        base: this.hexToRgb(scheme.onPrimary),
        background: this.hexToRgb(scheme.primary),
        emphasis_0: this.hexToRgb(scheme.onPrimary),
        emphasis_1: this.hexToRgb(scheme.primaryContainer),
        emphasis_2: this.hexToRgb(terminalColors.bright.magenta),
        emphasis_3: this.hexToRgb(terminalColors.bright.cyan),
      },

      // Table components
      table_title: {
        base: this.hexToRgb(terminalColors.bright.blue),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.normal.green),
        emphasis_1: this.hexToRgb(terminalColors.normal.cyan),
        emphasis_2: this.hexToRgb(terminalColors.bright.blue),
        emphasis_3: this.hexToRgb(terminalColors.normal.red),
      },

      table_cell_unselected: {
        base: this.hexToRgb(scheme.onSurface),
        background: this.hexToRgb(scheme.surfaceContainer),
        emphasis_0: this.hexToRgb(terminalColors.normal.blue),
        emphasis_1: this.hexToRgb(terminalColors.normal.green),
        emphasis_2: this.hexToRgb(terminalColors.normal.yellow),
        emphasis_3: this.hexToRgb(terminalColors.normal.red),
      },

      table_cell_selected: {
        base: this.hexToRgb(scheme.onPrimaryContainer),
        background: this.hexToRgb(scheme.primaryContainer),
        emphasis_0: this.hexToRgb(terminalColors.bright.blue),
        emphasis_1: this.hexToRgb(terminalColors.bright.green),
        emphasis_2: this.hexToRgb(terminalColors.bright.yellow),
        emphasis_3: this.hexToRgb(terminalColors.bright.red),
      },

      // List components
      list_unselected: {
        base: this.hexToRgb(scheme.onSurface),
        background: this.hexToRgb(scheme.surfaceContainer),
        emphasis_0: this.hexToRgb(terminalColors.normal.cyan),
        emphasis_1: this.hexToRgb(terminalColors.normal.magenta),
        emphasis_2: this.hexToRgb(terminalColors.normal.yellow),
        emphasis_3: this.hexToRgb(terminalColors.normal.red),
      },

      list_selected: {
        base: this.hexToRgb(scheme.onPrimaryContainer),
        background: this.hexToRgb(scheme.primaryContainer),
        emphasis_0: this.hexToRgb(terminalColors.bright.cyan),
        emphasis_1: this.hexToRgb(terminalColors.bright.magenta),
        emphasis_2: this.hexToRgb(terminalColors.bright.yellow),
        emphasis_3: this.hexToRgb(terminalColors.bright.red),
      },

      // Frame components
      frame_unselected: {
        base: this.hexToRgb(scheme.outlineVariant),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.dim.blue),
        emphasis_1: this.hexToRgb(terminalColors.dim.green),
        emphasis_2: this.hexToRgb(terminalColors.dim.cyan),
        emphasis_3: this.hexToRgb(scheme.background),
      },

      frame_selected: {
        base: this.hexToRgb(terminalColors.bright.blue),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.bright.green),
        emphasis_1: this.hexToRgb(terminalColors.bright.cyan),
        emphasis_2: this.hexToRgb(terminalColors.bright.yellow),
        emphasis_3: this.hexToRgb(scheme.background),
      },

      frame_highlight: {
        base: this.hexToRgb(terminalColors.bright.magenta),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.bright.cyan),
        emphasis_1: this.hexToRgb(terminalColors.normal.magenta),
        emphasis_2: this.hexToRgb(terminalColors.normal.magenta),
        emphasis_3: this.hexToRgb(terminalColors.normal.magenta),
      },

      // Exit code components
      exit_code_success: {
        base: this.hexToRgb(terminalColors.bright.green),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.normal.green),
        emphasis_1: this.hexToRgb(scheme.background),
        emphasis_2: this.hexToRgb(terminalColors.dim.green),
        emphasis_3: this.hexToRgb(terminalColors.normal.cyan),
      },

      exit_code_error: {
        base: this.hexToRgb(terminalColors.bright.red),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(terminalColors.normal.red),
        emphasis_1: this.hexToRgb(scheme.background),
        emphasis_2: this.hexToRgb(scheme.background),
        emphasis_3: this.hexToRgb(scheme.background),
      },

      // Multiplayer user colors - usando colores de terminal vibrantes
      multiplayer_user_colors: {
        player_1: this.hexToRgb(terminalColors.bright.blue),
        player_2: this.hexToRgb(terminalColors.bright.green),
        player_3: this.hexToRgb(terminalColors.bright.magenta),
        player_4: this.hexToRgb(terminalColors.bright.cyan),
        player_5: this.hexToRgb(terminalColors.bright.yellow),
        player_6: this.hexToRgb(terminalColors.normal.blue),
        player_7: this.hexToRgb(terminalColors.normal.green),
        player_8: this.hexToRgb(terminalColors.normal.magenta),
        player_9: this.hexToRgb(terminalColors.normal.cyan),
        player_10: this.hexToRgb(terminalColors.normal.yellow),
      },
    };
  }

  static hexToRgb(hex) {
    try {
      const { red, green, blue } = hexRgb(hex);
      return [red, green, blue];
    } catch (error) {
      console.warn(
        `Warning: Invalid hex color "${hex}", using fallback [0, 0, 0]`
      );
      return [0, 0, 0];
    }
  }
}
