export class SyntaxAdvanced {
  static mapAdvancedSyntax(scheme) {
    return {
      property: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 500,
      },
      attribute: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 500,
      },

      operator: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 500,
      },

      punctuation: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 400,
      },
      "punctuation.delimiter": {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 500,
      },

      support: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 500,
      },
      "support.function": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 500,
      },

      entity: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 500,
      },
      "entity.name": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },

      tag: {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "entity.name.tag": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
      "entity.other.attribute-name": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 500,
      },

      "markup.heading": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.bold": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.italic": {
        color: scheme.secondary,
        font_style: "italic",
        font_weight: 500,
      },
      "markup.link": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 500,
      },
      "markup.quote": {
        color: scheme.tertiary,
        font_style: "italic",
        font_weight: 400,
      },
      "markup.raw": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 400,
      },

      "diff.added": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 500,
      },
      "diff.removed": {
        color: scheme.error,
        font_style: "normal",
        font_weight: 500,
      },
      "diff.changed": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 500,
      },

      invalid: {
        color: scheme.error,
        font_style: "normal",
        font_weight: 500,
      },
      "invalid.illegal": {
        color: scheme.error,
        font_style: "normal",
        font_weight: 600,
      },

      deprecated: {
        color: scheme.outline,
        font_style: "italic",
        font_weight: 400,
      },
    };
  }
}
