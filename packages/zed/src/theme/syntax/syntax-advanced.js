export class SyntaxAdvanced {
  static mapAdvancedSyntax(scheme, term) {
    return {
      property: {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 500,
      },
      attribute: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },

      operator: {
        color: term.normal.red,
        font_style: "normal",
        font_weight: 500,
      },

      punctuation: {
        color: scheme.onSurfaceVariant,
        font_style: "normal",
        font_weight: 400,
      },
      "punctuation.delimiter": {
        color: term.normal.red,
        font_style: "normal",
        font_weight: 500,
      },

      support: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 500,
      },
      "support.function": {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 500,
      },

      entity: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 500,
      },
      "entity.name": {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },

      tag: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      "entity.name.tag": {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 600,
      },
      "entity.other.attribute-name": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },

      "markup.heading": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.bold": {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.italic": {
        color: term.normal.magenta,
        font_style: "italic",
        font_weight: 500,
      },
      "markup.link": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 500,
      },
      "markup.quote": {
        color: term.normal.green,
        font_style: "italic",
        font_weight: 400,
      },
      "markup.raw": {
        color: term.normal.yellow,
        font_style: "normal",
        font_weight: 400,
      },

      "diff.added": {
        color: term.normal.green,
        font_style: "normal",
        font_weight: 500,
      },
      "diff.removed": {
        color: term.normal.red,
        font_style: "normal",
        font_weight: 500,
      },
      "diff.changed": {
        color: term.normal.yellow,
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