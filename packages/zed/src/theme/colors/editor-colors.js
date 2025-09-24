export class EditorColors {
  static mapEditorColors(scheme) {
    return {
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainerLow,

      "editor.active_line.background": scheme.surfaceContainerLowest,
      "editor.highlighted_line.background": scheme.surfaceContainerLow,

      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.inversePrimary,
      "editor.error_line_number": scheme.error,

      "editor.indent_guide": scheme.outlineVariant,
      "editor.indent_guide_active": scheme.inversePrimary,
      "editor.wrap_guide": scheme.outlineVariant,
      "editor.active_wrap_guide": scheme.inversePrimary,
      "editor.invisible": scheme.outlineVariant,

      "editor.document_highlight.read_background": `${scheme.secondaryContainer}4d`,
      "editor.document_highlight.write_background": `${scheme.primaryContainer}4d`,
      "editor.document_highlight.bracket_background": `${scheme.tertiaryContainer}4d`,

      "search.match_background": scheme.tertiaryContainer,
      "search.match_border": scheme.tertiary,
      "selection.background": `${scheme.primaryContainer}4d`,
      "selection.foreground": scheme.onPrimaryContainer,

      "editor.find_match.background": scheme.secondaryContainer,
      "editor.find_match.border": scheme.secondary,
      "editor.current_find_match.background": scheme.primaryContainer,
      "editor.current_find_match.border": scheme.primary,

      "editor.selection.background": scheme.primaryContainer,
      "editor.inactive_selection.background": scheme.surfaceContainer,
    };
  }
}
