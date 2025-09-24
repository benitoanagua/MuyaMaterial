import { SyntaxBase } from "./syntax/syntax-base.js";
import { SyntaxAdvanced } from "./syntax/syntax-advanced.js";

export class ZedSyntaxMapper {
  static mapSchemeToSyntax(scheme) {
    return {
      ...SyntaxBase.mapBaseSyntax(scheme),
      ...SyntaxAdvanced.mapAdvancedSyntax(scheme),
    };
  }
}
