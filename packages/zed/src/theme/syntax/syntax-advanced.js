import { SchemeValidator } from "../scheme-validator.js";

export class SyntaxAdvanced {
  static mapAdvancedSyntax(scheme) {
    return {
      property: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },
      attribute: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },

      operator: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },

      punctuation: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 500,
      },

      support: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },

      entity: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },

      tag: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "markup.heading": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },

      "diff.added": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 600,
      },
      "diff.removed": {
        color: scheme.error,
        font_style: "normal",
        font_weight: 600,
      },
      invalid: {
        color: scheme.error,
        font_style: "normal",
        font_weight: 600,
      },

      "markup.bold": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.italic": {
        color: scheme.secondary,
        font_style: "italic",
        font_weight: 600,
      },
      "markup.link": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "markup.quote": {
        color: scheme.tertiary,
        font_style: "italic",
        font_weight: 500,
      },

      "entity.name.tag": {
        color: scheme.inversePrimary,
        font_style: "normal",
        font_weight: 700,
      },
      "entity.other.attribute-name": {
        color: scheme.secondaryContainer,
        font_style: "normal",
        font_weight: 600,
      },
    };
  }
}
