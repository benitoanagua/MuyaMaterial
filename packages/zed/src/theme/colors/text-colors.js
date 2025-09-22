import { SchemeValidator } from "../scheme-validator.js";

export class TextColors {
  static mapTextColors(scheme) {
    return {
      // Text hierarchy ( text emphasis)
      text: scheme.onSurface,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": `${scheme.onSurface}${SchemeValidator.getOpacity(
        "disabled"
      )}`,
      "text.placeholder": `${
        scheme.onSurfaceVariant
      }${SchemeValidator.getOpacity("disabled")}`,

      // Icon hierarchy ( icon emphasis)
      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.disabled": `${scheme.onSurfaceVariant}${SchemeValidator.getOpacity(
        "disabled"
      )}`,
    };
  }
}
