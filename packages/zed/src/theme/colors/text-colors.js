export class TextColors {
  static mapTextColors(scheme) {
    return {
      text: scheme.onBackground,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": `${scheme.onSurface}50`,
      "text.placeholder": `${scheme.onSurfaceVariant}60`,

      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.disabled": `${scheme.onSurfaceVariant}40`,
      "icon.muted": `${scheme.onSurfaceVariant}60`,
      "icon.placeholder": `${scheme.onSurfaceVariant}50`,

      "link_text.hover": scheme.secondary,
    };
  }
}
