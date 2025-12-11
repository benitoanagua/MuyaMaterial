export class SyntaxBase {
  static mapBaseSyntax(scheme, term) {
    return {
      keyword: {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },
      "keyword.control": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },
      "keyword.operator": {
        color: term.normal.red,
        font_style: "normal",
        font_weight: 600,
      },

      type: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      "type.builtin": {
        color: term.normal.cyan,
        font_style: "italic",
        font_weight: 600,
      },
      class: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      struct: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      enum: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      interface: {
        color: term.normal.cyan,
        font_style: "italic",
        font_weight: 600,
      },

      function: {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },
      "function.builtin": {
        color: term.normal.blue,
        font_style: "italic",
        font_weight: 600,
      },
      "function.method": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },

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

      constant: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },
      "constant.builtin": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 600,
      },
      "constant.numeric": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },
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

      comment: {
        color: term.normal.green,
        font_style: "italic",
        font_weight: 400,
      },
      "comment.documentation": {
        color: term.normal.green,
        font_style: "italic",
        font_weight: 400,
      },
    };
  }
}