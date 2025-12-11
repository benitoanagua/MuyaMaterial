import { SyntaxBase } from "./syntax/syntax-base.js";
import { SyntaxEspecific } from "./syntax/syntax-especific.js";
import { SyntaxAdvanced } from "./syntax/syntax-advanced.js";

export class ZedSyntaxMapper {
  static mapSchemeToSyntax(scheme, term) {
    const baseSyntax = SyntaxBase.mapBaseSyntax(scheme, term);
    const syntaxEspecific = SyntaxEspecific.mapEspecificSyntax(scheme, term);
    const advancedSyntax = SyntaxAdvanced.mapAdvancedSyntax(scheme, term);

    const syntax = {
      ...baseSyntax,
      ...syntaxEspecific,
      ...advancedSyntax,
    };

    return this.validateSyntax(syntax);
  }

  static validateSyntax(syntax) {
    const validStyles = ["normal", "italic", "oblique"];
    const validWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    const validated = {};

    for (const [key, value] of Object.entries(syntax)) {
      if (value && typeof value === "object") {
        validated[key] = { ...value };

        if (value.font_style && !validStyles.includes(value.font_style)) {
          console.warn(`Invalid font_style for ${key}: ${value.font_style}`);
          validated[key].font_style = "normal";
        }

        if (value.font_weight && !validWeights.includes(value.font_weight)) {
          console.warn(`Invalid font_weight for ${key}: ${value.font_weight}`);
          validated[key].font_weight = 400;
        }

        if (!validated[key].background_color)
          validated[key].background_color = null;
        if (!validated[key].color) validated[key].color = null;
        if (!validated[key].font_style) validated[key].font_style = null;
        if (!validated[key].font_weight) validated[key].font_weight = null;
      }
    }

    return validated;
  }
}