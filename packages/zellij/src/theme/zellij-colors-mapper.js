export class ZellijColorsMapper {
  static mapSchemeToZellij(scheme) {
    return {
      // Text components
      text_unselected: {
        base: this.hexToRgb(scheme.onBackground),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      text_selected: {
        base: this.hexToRgb(scheme.onPrimaryContainer),
        background: this.hexToRgb(scheme.primaryContainer),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      // Ribbon components
      ribbon_unselected: {
        base: this.hexToRgb(scheme.onSurface),
        background: this.hexToRgb(scheme.surfaceContainerHigh),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.onSurface),
        emphasis_2: this.hexToRgb(scheme.secondary),
        emphasis_3: this.hexToRgb(scheme.tertiary),
      },

      ribbon_selected: {
        base: this.hexToRgb(scheme.onPrimary),
        background: this.hexToRgb(scheme.primary),
        emphasis_0: this.hexToRgb(scheme.onPrimary),
        emphasis_1: this.hexToRgb(scheme.primaryContainer),
        emphasis_2: this.hexToRgb(scheme.secondary),
        emphasis_3: this.hexToRgb(scheme.tertiary),
      },

      // Table components
      table_title: {
        base: this.hexToRgb(scheme.primary),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.secondary),
        emphasis_1: this.hexToRgb(scheme.tertiary),
        emphasis_2: this.hexToRgb(scheme.primary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      table_cell_unselected: {
        base: this.hexToRgb(scheme.onSurface),
        background: this.hexToRgb(scheme.surfaceContainer),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      table_cell_selected: {
        base: this.hexToRgb(scheme.onPrimaryContainer),
        background: this.hexToRgb(scheme.primaryContainer),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      // List components
      list_unselected: {
        base: this.hexToRgb(scheme.onSurface),
        background: this.hexToRgb(scheme.surfaceContainer),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      list_selected: {
        base: this.hexToRgb(scheme.onPrimaryContainer),
        background: this.hexToRgb(scheme.primaryContainer),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.error),
      },

      // Frame components
      frame_unselected: {
        base: this.hexToRgb(scheme.outlineVariant),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.primary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.tertiary),
        emphasis_3: this.hexToRgb(scheme.background),
      },

      frame_selected: {
        base: this.hexToRgb(scheme.primary),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.secondary),
        emphasis_1: this.hexToRgb(scheme.tertiary),
        emphasis_2: this.hexToRgb(scheme.error),
        emphasis_3: this.hexToRgb(scheme.background),
      },

      frame_highlight: {
        base: this.hexToRgb(scheme.secondary),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.tertiary),
        emphasis_1: this.hexToRgb(scheme.secondary),
        emphasis_2: this.hexToRgb(scheme.secondary),
        emphasis_3: this.hexToRgb(scheme.secondary),
      },

      // Exit code components
      exit_code_success: {
        base: this.hexToRgb(scheme.tertiary),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.secondary),
        emphasis_1: this.hexToRgb(scheme.background),
        emphasis_2: this.hexToRgb(scheme.error),
        emphasis_3: this.hexToRgb(scheme.primary),
      },

      exit_code_error: {
        base: this.hexToRgb(scheme.error),
        background: this.hexToRgb(scheme.background),
        emphasis_0: this.hexToRgb(scheme.tertiary),
        emphasis_1: this.hexToRgb(scheme.background),
        emphasis_2: this.hexToRgb(scheme.background),
        emphasis_3: this.hexToRgb(scheme.background),
      },

      // Multiplayer user colors
      multiplayer_user_colors: {
        player_1: this.hexToRgb(scheme.primary),
        player_2: this.hexToRgb(scheme.secondary),
        player_3: this.hexToRgb(scheme.tertiary),
        player_4: this.hexToRgb(scheme.error),
        player_5: this.hexToRgb(scheme.primaryContainer),
        player_6: this.hexToRgb(scheme.secondaryContainer),
        player_7: this.hexToRgb(scheme.tertiaryContainer),
        player_8: this.hexToRgb(scheme.surfaceVariant),
        player_9: this.hexToRgb(scheme.outline),
        player_10: this.hexToRgb(scheme.onSurfaceVariant),
      },
    };
  }

  static hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, "");

    // Parse hex values
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      // Fallback to black
      return [0, 0, 0];
    }

    return [r, g, b];
  }
}
