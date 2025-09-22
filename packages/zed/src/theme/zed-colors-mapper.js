export class ZedColorsMapper {
  static mapSchemeToZed(scheme) {
    return {
      // Base colors
      ...this.mapBaseColors(scheme),

      // Text colors
      ...this.mapTextColors(scheme),

      // Border colors
      ...this.mapBorderColors(scheme),

      // Element states
      ...this.mapElementColors(scheme),

      // Editor colors
      ...this.mapEditorColors(scheme),

      // UI component colors
      ...this.mapUIComponentColors(scheme),

      // System state colors
      ...this.mapSystemStateColors(scheme),

      // Terminal colors
      ...this.mapTerminalColors(scheme),

      // Accents and players
      ...this.mapAccentColors(scheme),
    };
  }

  static mapBaseColors(scheme) {
    return {
      background: scheme.background,
      "surface.background": scheme.surface,
      "elevated_surface.background": scheme.surfaceContainerHigh,
    };
  }

  static mapTextColors(scheme) {
    return {
      text: scheme.onSurface,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": `${scheme.onSurface}60`,
      "text.placeholder": `${scheme.onSurfaceVariant}80`,
    };
  }

  static mapBorderColors(scheme) {
    return {
      border: scheme.outline,
      "border.variant": scheme.outlineVariant,
      "border.focused": scheme.primary,
      "border.selected": scheme.primary,
      "border.disabled": `${scheme.outline}40`,
      "border.transparent": `${scheme.outline}20`,
    };
  }

  static mapElementColors(scheme) {
    return {
      "element.background": scheme.surfaceContainer,
      "element.hover": scheme.surfaceContainerHigh,
      "element.active": scheme.primaryContainer,
      "element.selected": scheme.primaryContainer,
      "element.disabled": `${scheme.surfaceContainer}60`,

      "ghost_element.background": scheme.surface,
      "ghost_element.hover": scheme.surfaceContainer,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": scheme.surfaceContainerHigh,
      "ghost_element.disabled": `${scheme.surface}60`,
    };
  }

  static mapEditorColors(scheme) {
    return {
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainer,
      "editor.active_line.background": `${scheme.surfaceContainer}50`,
      "editor.highlighted_line.background": `${scheme.surfaceContainer}30`,
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,
      "editor.indent_guide": `${scheme.outline}30`,
      "editor.indent_guide_active": `${scheme.primary}50`,
      "editor.wrap_guide": `${scheme.outline}20`,
      "editor.active_wrap_guide": `${scheme.primary}30`,
      "editor.invisible": `${scheme.outline}40`,
      "editor.subheader.background": scheme.surfaceContainer,

      "editor.document_highlight.read_background": `${scheme.secondaryContainer}30`,
      "editor.document_highlight.write_background": `${scheme.primaryContainer}30`,
      "editor.document_highlight.bracket_background": `${scheme.primary}20`,
    };
  }

  static mapUIComponentColors(scheme) {
    return {
      // Tabs
      "tab.active_background": scheme.surface,
      "tab.inactive_background": scheme.surfaceContainerHigh,
      "tab_bar.background": scheme.surfaceContainerHighest,

      // Status bar
      "status_bar.background": scheme.surfaceContainerHighest,

      // Panels and panes
      "panel.background": scheme.surfaceContainerHigh,
      "panel.focused_border": scheme.primary,
      "pane.focused_border": scheme.primary,
      "pane_group.border": scheme.outlineVariant,

      // Scrollbars
      "scrollbar.thumb.background": `${scheme.outline}40`,
      "scrollbar.thumb.border": `${scheme.outlineVariant}50`,
      "scrollbar.thumb.hover_background": scheme.primary,
      "scrollbar.track.background": `${scheme.outline}20`,
      "scrollbar.track.border": `${scheme.outlineVariant}30`,

      // Icons
      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.muted": `${scheme.onSurfaceVariant}60`,
      "icon.disabled": `${scheme.onSurfaceVariant}40`,
      "icon.placeholder": `${scheme.onSurfaceVariant}50`,

      // Title bar and toolbar
      "title_bar.background": scheme.surfaceContainerHighest,
      "title_bar.inactive_background": scheme.surfaceContainerHigh,
      "toolbar.background": scheme.surfaceContainerHigh,

      // Search and drop target
      "search.match_background": `${scheme.tertiary}40`,
      "drop_target.background": `${scheme.primary}20`,
    };
  }

  static mapSystemStateColors(scheme) {
    const stateColors = {
      error: scheme.error,
      warning: scheme.tertiary,
      info: scheme.primary,
      success: scheme.secondary,
      hint: scheme.secondary,
      created: scheme.secondary,
      modified: scheme.primary,
      deleted: scheme.error,
      conflicted: scheme.tertiary,
      renamed: scheme.secondary,
      ignored: scheme.onSurfaceVariant,
      hidden: scheme.onSurfaceVariant,
    };

    const result = {};

    for (const [key, color] of Object.entries(stateColors)) {
      result[key] = color;
      result[`${key}.background`] = `${color}20`;
      result[`${key}.border`] = color;
    }

    return result;
  }

  static mapTerminalColors(scheme) {
    return {
      "terminal.background": scheme.surfaceContainerLow,
      "terminal.foreground": scheme.onSurface,
      "terminal.bright_foreground": scheme.onSurface,
      "terminal.dim_foreground": `${scheme.onSurface}80`,

      // ANSI colors
      "terminal.ansi.black": scheme.outlineVariant,
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
      "terminal.ansi.bright_magenta": scheme.error,
      "terminal.ansi.bright_cyan": scheme.tertiary,
      "terminal.ansi.bright_white": scheme.onSurface,
    };
  }

  static mapAccentColors(scheme) {
    return {
      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      players: [
        {
          cursor: scheme.primary,
          selection: `${scheme.primary}40`,
          background: scheme.primaryContainer,
        },
        {
          cursor: scheme.secondary,
          selection: `${scheme.secondary}40`,
          background: scheme.secondaryContainer,
        },
      ],
    };
  }
}
