export class EditorColors {
  static mapEditorColors(scheme, term) {
    return {
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainer,
      "editor.active_line.background": `${scheme.surfaceContainerLow}B0`,
      "editor.highlighted_line.background": `${scheme.primaryContainer}66`,
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,
      "editor.invisible": `${scheme.outlineVariant}66`,
      "editor.indent_guide": `${term.normal.blue}99`,
      "editor.indent_guide_active": term.normal.blue,
      "editor.wrap_guide": scheme.outlineVariant,
      "editor.active_wrap_guide": term.normal.cyan,
      "editor.document_highlight.read_background": `${term.normal.green}4D`,
      "editor.document_highlight.write_background": `${term.normal.blue}4D`,
      "editor.document_highlight.bracket_background": `${term.normal.yellow}3D`,
      "editor.subheader.background": scheme.surfaceContainer,
      "search.match_background": `${term.normal.yellow}66`,
    };
  }
}