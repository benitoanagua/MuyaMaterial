export class GeneralColors {
  static mapGeneralColors(scheme) {
    return {
      accents: [scheme.primary, scheme.secondary, scheme.tertiary],
      "background.appearance": "opaque",
      "link_text.hover": scheme.primary,
    };
  }
}
