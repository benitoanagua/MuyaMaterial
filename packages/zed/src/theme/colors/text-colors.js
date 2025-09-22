import { SchemeValidator } from "../scheme-validator.js";

export class TextColors {
  static mapTextColors(scheme) {
    return {
      text: scheme.onBackground,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": `${scheme.onSurface}${SchemeValidator.getOpacity(
        "disabled"
      )}`,
      "text.placeholder": `${
        scheme.onSurfaceVariant
      }${SchemeValidator.getOpacity("disabled")}`,

      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.disabled": `${scheme.onSurfaceVariant}${SchemeValidator.getOpacity(
        "disabled"
      )}`,

      "text.high_contrast": scheme.inverseOnSurface,
      "text.emphasis": scheme.inversePrimary,
      "text.warning": scheme.error,
      "text.success": scheme.tertiary,
    };
  }
}
