import { SchemeValidator } from "../scheme-validator.js";

export class StateColors {
  static mapStateColors(scheme) {
    return {
      // Interactive states using proper  containers
      "element.hover": `${scheme.onSurface}${SchemeValidator.getOpacity(
        "hover"
      )}`,
      "element.active": scheme.primaryContainer,
      "element.selected": scheme.secondaryContainer,
      "element.disabled": `${scheme.onSurface}${SchemeValidator.getOpacity(
        "disabled"
      )}`,

      "ghost_element.hover": `${scheme.onSurface}${SchemeValidator.getOpacity(
        "hover"
      )}`,
      "ghost_element.active": scheme.surfaceContainerHigh,
      "ghost_element.selected": scheme.surfaceContainer,
      "ghost_element.disabled": `${
        scheme.onSurface
      }${SchemeValidator.getOpacity("disabled")}`,

      // Focus states using  primary color
      "border.focused": scheme.primary,
      "border.selected": scheme.primary,

      // Error states using  error colors
      "error.background": scheme.errorContainer,
      "error.border": scheme.error,

      // Success states using tertiary container
      "success.background": scheme.tertiaryContainer,
      "success.border": scheme.tertiary,

      // Warning states using secondary container
      "warning.background": scheme.secondaryContainer,
      "warning.border": scheme.secondary,

      // Info states using primary container
      "info.background": scheme.primaryContainer,
      "info.border": scheme.primary,
    };
  }
}
