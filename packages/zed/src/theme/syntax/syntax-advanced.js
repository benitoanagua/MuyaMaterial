export class SyntaxAdvanced {
  static mapAdvancedSyntax(scheme, term) {
    return {
      // Tags & Attributes
      tag: {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 700,
      },
      "entity.name.tag": {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 700,
      },
      attribute: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },
      "entity.other.attribute-name": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },

      // Properties
      property: {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 500,
      },
      "variable.other.property": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 500,
      },

      // Markdown & Markup
      "markup.heading": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.bold": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 700,
      },
      "markup.italic": {
        color: term.normal.cyan,
        font_style: "italic",
        font_weight: 500,
      },
      "markup.link": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 500,
      },
      "markup.underline.link": {
        color: term.normal.green,
        font_style: "normal",
        font_weight: 400,
      },
      "markup.quote": {
        color: term.dim.green,
        font_style: "italic",
        font_weight: 400,
      },
      "markup.raw": {
        color: term.normal.yellow,
        font_style: "normal",
        font_weight: 400,
      },
      "markup.list": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 600,
      },

      // Diff
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

      // Status
      invalid: {
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