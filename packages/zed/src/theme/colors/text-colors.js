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
      "icon.muted": `${scheme.onSurfaceVariant}80`,
      "icon.placeholder": `${scheme.onSurfaceVariant}60`,

      "link_text.hover": scheme.primary,
    };
  }
}
