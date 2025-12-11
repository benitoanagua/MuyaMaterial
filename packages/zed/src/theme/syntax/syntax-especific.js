export class SyntaxEspecific {
  static mapEspecificSyntax(scheme, term) {
    return {
      "markup.list": {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 400,
      },
      "markup.code": {
        color: term.normal.yellow,
        font_style: "normal",
        font_weight: 400,
        background_color: scheme.surfaceContainerLow,
      },
      "constant.character.escape": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 600,
      },
      storage: {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 600,
      },
      "storage.type": {
        color: term.normal.magenta,
        font_style: "normal",
        font_weight: 600,
      },
    };
  }
}