export class SyntaxBase {
  static mapBaseSyntax(scheme) {
    return {
      keyword: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 700,
      },
      "keyword.control": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },
      "keyword.operator": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 700,
      },

      type: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      "type.builtin": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },
      class: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      struct: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      enum: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      interface: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },

      function: {
        color: scheme.primary,
        font_style: "italic",
        font_weight: 600,
      },
      "function.builtin": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },
      "function.method": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: 600,
      },

      variable: {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 600,
      },
      "variable.parameter": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 600,
      },
      "variable.builtin": {
        color: scheme.inversePrimary,
        font_style: "italic",
        font_weight: 600,
      },

      constant: {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 600,
      },
      "constant.builtin": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },
      "constant.numeric": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 600,
      },
      string: {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 600,
      },
      "string.regexp": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 600,
      },

      comment: {
        color: scheme.outline,
        font_style: "italic",
        font_weight: 500,
      },
      "comment.documentation": {
        color: scheme.outlineVariant,
        font_style: "italic",
        font_weight: 500,
      },
    };
  }
}
