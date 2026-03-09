export class SyntaxBase {
  static mapBaseSyntax(scheme, term) {
    return {
      // Keywords & Storage
      keyword: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 700,
      },
      "keyword.control": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 700,
      },
      storage: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 700,
      },
      "storage.type": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 700,
      },

      // Types & Classes
      type: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      class: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 700,
      },
      interface: {
        color: term.normal.cyan,
        font_style: "italic",
        font_weight: 600,
      },

      // Functions & Methods
      function: {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },
      "function.method": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },
      "function.builtin": {
        color: term.normal.blue,
        font_style: "italic",
        font_weight: 600,
      },

      // Variables & Parameters
      variable: {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 400,
      },
      "variable.parameter": {
        color: term.normal.yellow,
        font_style: "normal",
        font_weight: 500,
      },
      "variable.builtin": {
        color: term.normal.blue,
        font_style: "italic",
        font_weight: 600,
      },
      "variable.other.member": {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 500,
      },

      // Constants
      constant: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },
      "constant.builtin": {
        color: term.normal.magenta,
        font_style: "italic",
        font_weight: 600,
      },
      "constant.numeric": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },

      // Strings & Regex
      string: {
        color: term.normal.yellow,
        font_style: "normal",
        font_weight: 400,
      },
      "string.regexp": {
        color: term.normal.red,
        font_style: "normal",
        font_weight: 600,
      },

      // Comments
      comment: {
        color: term.dim.green,
        font_style: "italic",
        font_weight: 400,
      },
      "comment.documentation": {
        color: term.dim.green,
        font_style: "italic",
        font_weight: 400,
      },

      // Punctuation & Operators
      operator: {
        color: term.normal.red,
        font_style: "normal",
        font_weight: 600,
      },
      punctuation: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 400,
      },
      "punctuation.delimiter": {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 400,
      },
      "punctuation.bracket": {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 400,
      },
    };
  }
}