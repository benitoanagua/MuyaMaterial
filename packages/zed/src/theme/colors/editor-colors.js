export class EditorColors {
  static mapEditorColors(scheme, term) {
    return {
      "editor.background": scheme.surface,
      "editor.foreground": scheme.onSurface,
      "editor.gutter.background": scheme.surface,
      "editor.active_line.background": `${scheme.onSurface}0D`, // Subtle overlay
      "editor.highlighted_line.background": `${scheme.primaryContainer}40`,
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,
      "editor.hover_line_number": scheme.onSurface,
      "editor.invisible": `${scheme.outlineVariant}60`,
      "editor.indent_guide": `${scheme.outlineVariant}50`,
      "editor.indent_guide_active": scheme.primary,
      "editor.wrap_guide": `${scheme.outlineVariant}40`,
      "editor.active_wrap_guide": `${scheme.outlineVariant}70`,
      
      // Selection
      "selection.background": `${scheme.primaryContainer}A6`,
      "editor.selection.background": `${scheme.primaryContainer}A6`,
      "editor.selection.inactive_background": `${scheme.primaryContainer}40`,
      "editor.document_highlight.read_background": `${scheme.secondaryContainer}4D`,
      "editor.document_highlight.write_background": `${scheme.primaryContainer}4D`,
      "editor.document_highlight.bracket_background": `${scheme.tertiaryContainer}4D`,

      // Search
      "search.match_background": `${scheme.tertiaryContainer}80`,
      "search.active_match_background": `${scheme.tertiaryContainer}CC`,

      // Tabs
      "tab.active_background": scheme.surface,
      "tab.active_foreground": scheme.primary,
      "tab.inactive_background": scheme.surfaceContainerLow,
      "tab.inactive_foreground": scheme.onSurfaceVariant,
      "tab.hover_background": scheme.surfaceContainer,

      // Scrollbar
      "scrollbar.thumb.background": `${scheme.onSurfaceVariant}4D`,
      "scrollbar.thumb.border": "#00000000",
      "scrollbar.thumb.hover_background": `${scheme.onSurfaceVariant}80`,
      "scrollbar.thumb.active_background": `${scheme.onSurfaceVariant}B3`,
      "scrollbar.track.background": "#00000000",

      // Guides in panels
      "panel.indent_guide": `${scheme.outlineVariant}60`,
      "panel.indent_guide_active": scheme.primary,
      "panel.indent_guide_hover": `${scheme.outlineVariant}B3`,
    };
  }
}