export class TextColors {
  static mapTextColors(scheme) {
    return {
      text: scheme.onBackground,
      "text.accent": scheme.primary,
      "text.muted": scheme.onSurfaceVariant,
      "text.disabled": scheme.onSurfaceVariant,
      "text.placeholder": scheme.onSurfaceVariant,

      icon: scheme.onSurfaceVariant,
      "icon.accent": scheme.primary,
      "icon.disabled": scheme.onSurfaceVariant,
      "icon.muted": scheme.onSurfaceVariant,
      "icon.placeholder": scheme.onSurfaceVariant,

      "link_text.hover": scheme.secondary,
    };
  }
}
