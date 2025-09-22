import { SchemeValidator } from "../scheme-validator.js";

export class StateColors {
  static mapStateColors(scheme) {
    return {
      "element.hover": `${scheme.primary}${SchemeValidator.getOpacity(
        "hover"
      )}`,
      "element.active": scheme.primaryContainer,
      "element.selected": scheme.secondaryContainer,
      "element.disabled": `${scheme.onSurface}${SchemeValidator.getOpacity(
        "disabled"
      )}`,

      "ghost_element.hover": `${scheme.secondary}${SchemeValidator.getOpacity(
        "hover"
      )}`,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": scheme.surfaceContainer,
      "ghost_element.disabled": `${
        scheme.onSurface
      }${SchemeValidator.getOpacity("disabled")}`,

      "border.focused": scheme.inversePrimary,
      "border.selected": scheme.inversePrimary,

      "error.background": scheme.errorContainer,
      "error.border": scheme.error,
      "error.foreground": scheme.onError,

      "success.background": scheme.tertiaryContainer,
      "success.border": scheme.tertiary,
      "success.foreground": scheme.onTertiary,

      "warning.background": scheme.secondaryContainer,
      "warning.border": scheme.secondary,
      "warning.foreground": scheme.onSecondary,

      "info.background": scheme.primaryContainer,
      "info.border": scheme.primary,
      "info.foreground": scheme.onPrimary,

      "element.focus.background": `${
        scheme.inversePrimary
      }${SchemeValidator.getOpacity("focus")}`,
      "element.pressed.background": scheme.surfaceContainerHighest,
    };
  }
}
