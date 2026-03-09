export class SyntaxSpecific {
  static mapSpecificSyntax(scheme, term) {
    return {
      // Language Specific Overrides
      // e.g., JSON
      "property.json": {
        color: term.normal.blue,
        font_style: "normal",
        font_weight: 500,
      },
      // e.g., CSS
      "property.css": {
        color: term.normal.cyan,
        font_style: "normal",
        font_weight: 500,
      },
      "type.css": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 500,
      },
    };
  }
}