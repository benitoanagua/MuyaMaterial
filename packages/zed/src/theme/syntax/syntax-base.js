export class SyntaxBase {
  static mapBaseSyntax(scheme) {
    return {
      keyword: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },
      "keyword.control": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      "keyword.operator": {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 600,
      },

      type: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "type.builtin": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: 600,
      },
      class: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      struct: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      enum: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      interface: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },

      function: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "function.builtin": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: 600,
      },
      "function.method": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },

      variable: {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 400,
      },
      "variable.parameter": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 500,
      },
      "variable.builtin": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: 600,
      },

      constant: {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 500,
      },
      "constant.builtin": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "constant.numeric": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 500,
      },
      string: {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 400,
      },
      "string.regexp": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },

      comment: {
        color: scheme.outline,
        font_style: "italic",
        font_weight: 400,
      },
      "comment.documentation": {
        color: scheme.outlineVariant,
        font_style: "italic",
        font_weight: 400,
      },
    };
  }
}
