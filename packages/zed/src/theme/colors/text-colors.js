export class TextColors {
  static mapTextColors(scheme) {
    return {
      text: scheme.onSurface,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": `${scheme.onSurfaceVariant}CC`,
      "text.placeholder": `${scheme.onSurfaceVariant}E6`,

      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.disabled": `${scheme.onSurfaceVariant}B3`,
      "icon.muted": scheme.onSurfaceVariant,
      "icon.placeholder": `${scheme.onSurfaceVariant}B3`,

      "link_text.hover": scheme.secondary,
    };
  }
}
