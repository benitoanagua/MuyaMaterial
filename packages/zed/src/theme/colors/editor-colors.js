import { SchemeValidator } from "../scheme-validator.js";

export class EditorColors {
  static mapEditorColors(scheme) {
    return {
      // Editor core ( background system)
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.gutter.background": scheme.surfaceContainerLowest,

      // Editor states (using  containers)
      "editor.active_line.background": scheme.surfaceContainerLow,
      "editor.highlighted_line.background": scheme.surfaceContainer,

      // Editor text ( text hierarchy)
      "editor.line_number": scheme.onSurfaceVariant,
      "editor.active_line_number": scheme.primary,

      // Editor guides ( outline system)
      "editor.indent_guide": scheme.outlineVariant,
      "editor.indent_guide_active": scheme.primary,
      "editor.wrap_guide": scheme.outlineVariant,
      "editor.active_wrap_guide": scheme.primary,
      "editor.invisible": scheme.outlineVariant,

      // Document highlighting ( container colors)
      "editor.document_highlight.read_background": scheme.secondaryContainer,
      "editor.document_highlight.write_background": scheme.primaryContainer,
      "editor.document_highlight.bracket_background": scheme.tertiaryContainer,

      // Search and selection
      "search.match_background": scheme.tertiaryContainer,
    };
  }
}
