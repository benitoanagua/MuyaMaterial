import { SchemeValidator } from "../scheme-validator.js";

export class SyntaxAdvanced {
  static mapAdvancedSyntax(scheme) {
    return {
      // Properties/Attributes ->  secondary color
      property: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      attribute: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },

      // Operators ->  secondary color
      operator: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },

      // Punctuation ->  onSurfaceVariant (secondary text)
      punctuation: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: null,
      },

      // Support classes ->  primary color (emphasized)
      support: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },

      // Entities ->  primary color
      entity: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: null,
      },

      // Markup elements
      tag: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: null,
      },
      "markup.heading": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },

      // Diff/Special states
      "diff.added": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: null,
      },
      "diff.removed": {
        color: scheme.error,
        font_style: "normal",
        font_weight: null,
      },
      invalid: {
        color: scheme.error,
        font_style: "normal",
        font_weight: null,
      },
    };
  }
}
