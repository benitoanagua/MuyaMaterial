export class TextColors {
  static mapTextColors(scheme) {
    return {
      text: scheme.onBackground,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": `${scheme.onSurface}90`,
      "text.placeholder": `${scheme.onSurfaceVariant}90`,

      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.disabled": `${scheme.onSurfaceVariant}90`,

      "text.high_contrast": scheme.inverseOnSurface,
      "text.emphasis": scheme.inversePrimary,
      "text.warning": scheme.error,
      "text.success": scheme.tertiary,
    };
  }
}
