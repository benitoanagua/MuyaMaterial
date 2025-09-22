import { SchemeValidator } from "../scheme-validator.js";

export class SyntaxBase {
  static mapBaseSyntax(scheme) {
    return {
      // Keywords ->  secondary color
      keyword: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "keyword.control": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "keyword.operator": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },

      // Types/Classes ->  primary color
      type: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "type.builtin": {
        color: scheme.primary,
        font_style: "normal",
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

      // Functions ->  primary color
      function: {
        color: scheme.primary,
        font_style: "italic",
        font_weight: null,
      },
      "function.builtin": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "function.method": {
        color: scheme.primary,
        font_style: "italic",
        font_weight: null,
      },

      // Variables ->  onSurface
      variable: {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: null,
      },
      "variable.parameter": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      "variable.builtin": {
        color: scheme.onSurface,
        font_style: "italic",
        font_weight: null,
      },

      // Constants/Strings ->  tertiary color
      constant: {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      "constant.builtin": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 600,
      },
      "constant.numeric": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      string: {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },
      "string.regexp": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: null,
      },

      // Comments ->  outline color
      comment: {
        color: scheme.outline,
        font_style: "italic",
        font_weight: null,
      },
      "comment.documentation": {
        color: scheme.outline,
        font_style: "italic",
        font_weight: null,
      },
    };
  }
}
