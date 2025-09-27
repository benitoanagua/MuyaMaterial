export class EditorColors {
  static mapEditorColors(scheme) {
    return {
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainerLow,
      "editor.active_line.background": scheme.surfaceContainerLowest,
      "editor.highlighted_line.background": scheme.surfaceContainerLow,
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,
      "editor.invisible": scheme.outlineVariant,
      "editor.indent_guide": scheme.outlineVariant,
      "editor.indent_guide_active": scheme.primary,
      "editor.wrap_guide": scheme.outlineVariant,
      "editor.active_wrap_guide": scheme.primary,
      "editor.document_highlight.read_background": `${scheme.secondaryContainer}4d`,
      "editor.document_highlight.write_background": `${scheme.primaryContainer}4d`,
      "editor.document_highlight.bracket_background": `${scheme.tertiaryContainer}4d`,
      "editor.subheader.background": scheme.surfaceContainer,
      "search.match_background": scheme.tertiaryContainer,
    };
  }
}
