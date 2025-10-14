export class EditorColors {
  static mapEditorColors(scheme) {
    return {
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainer,
      "editor.active_line.background": scheme.surfaceContainerLow,
      "editor.highlighted_line.background": `${scheme.primaryContainer}33`,
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,
      "editor.invisible": scheme.outlineVariant,
      "editor.indent_guide": scheme.outlineVariant,
      "editor.indent_guide_active": scheme.primary,
      "editor.wrap_guide": scheme.outlineVariant,
      "editor.active_wrap_guide": scheme.secondary,
      "editor.document_highlight.read_background": `${scheme.secondaryContainer}40`,
      "editor.document_highlight.write_background": `${scheme.primaryContainer}40`,
      "editor.document_highlight.bracket_background": `${scheme.tertiaryContainer}40`,
      "editor.subheader.background": scheme.surfaceContainer,
      "search.match_background": scheme.tertiaryContainer,
    };
  }
}
