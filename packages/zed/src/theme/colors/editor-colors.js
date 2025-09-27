export class EditorColors {
  static mapEditorColors(scheme) {
    return {
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainerLow,
      "editor.active_line.background": scheme.surfaceContainerLowest,
      "editor.highlighted_line.background": `${scheme.primary}08`,
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,
      "editor.invisible": `${scheme.outlineVariant}50`,
      "editor.indent_guide": `${scheme.outlineVariant}40`,
      "editor.indent_guide_active": scheme.primary,
      "editor.wrap_guide": `${scheme.outlineVariant}30`,
      "editor.active_wrap_guide": scheme.secondary,
      "editor.document_highlight.read_background": `${scheme.secondaryContainer}50`,
      "editor.document_highlight.write_background": `${scheme.primaryContainer}50`,
      "editor.document_highlight.bracket_background": `${scheme.tertiaryContainer}50`,
      "editor.subheader.background": scheme.surfaceContainer,
      "search.match_background": scheme.tertiaryContainer,
    };
  }
}
