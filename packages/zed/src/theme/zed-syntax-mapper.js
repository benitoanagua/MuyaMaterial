import { SyntaxBase } from "./syntax/syntax-base.js";
import { SyntaxAdvanced } from "./syntax/syntax-advanced.js";
import { SchemeValidator } from "./scheme-validator.js";

export class ZedSyntaxMapper {
  static mapSchemeToSyntax(scheme) {
    SchemeValidator.validateScheme(scheme);

    return {
      // Base syntax tokens ( color roles)
      ...SyntaxBase.mapBaseSyntax(scheme),

      // Advanced syntax tokens ( color roles)
      ...SyntaxAdvanced.mapAdvancedSyntax(scheme),
    };
  }
}
