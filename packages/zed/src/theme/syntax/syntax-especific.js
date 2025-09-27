export class SyntaxEspecific {
  static mapEspecificSyntax(scheme) {
    return {
      "markup.list": {
        color: scheme.onSurface,
        font_style: "normal",
        font_weight: 400,
      },
      "markup.code": {
        color: scheme.tertiary,
        font_style: "normal",
        font_weight: 400,
        background_color: `${scheme.surfaceContainerLow}99`,
      },
      "constant.character.escape": {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },
      storage: {
        color: scheme.secondary,
        font_style: "normal",
        font_weight: 600,
      },
      "storage.type": {
        color: scheme.primary,
        font_style: "normal",
        font_weight: 600,
      },
    };
  }
}
