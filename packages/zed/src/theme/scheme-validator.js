export class SchemeValidator {
  static validateScheme(scheme) {
    const requiredProperties = [
      "primary",
      "onPrimary",
      "primaryContainer",
      "onPrimaryContainer",
      "secondary",
      "onSecondary",
      "secondaryContainer",
      "onSecondaryContainer",
      "tertiary",
      "onTertiary",
      "tertiaryContainer",
      "onTertiaryContainer",
      "error",
      "onError",
      "errorContainer",
      "onErrorContainer",
      "background",
      "onBackground",
      "surface",
      "onSurface",
      "surfaceDim",
      "surfaceBright",
      "surfaceContainerLowest",
      "surfaceContainerLow",
      "surfaceContainer",
      "surfaceContainerHigh",
      "surfaceContainerHighest",
      "surfaceVariant",
      "onSurfaceVariant",
      "outline",
      "outlineVariant",
      "shadow",
      "scrim",
      "inverseSurface",
      "inverseOnSurface",
      "inversePrimary",
    ];

    const missing = requiredProperties.filter((prop) => !scheme[prop]);

    if (missing.length > 0) {
      throw new Error(`Missing  properties: ${missing.join(", ")}`);
    }

    return true;
  }

  static getOpacity(level) {
    const opacities = {
      disabled: "60", // 60% for disabled elements
      hover: "08", // 8% for hover states
      focus: "12", // 12% for focus states
      pressed: "12", // 12% for pressed states
      dragged: "16", // 16% for dragged states
      selected: "08", // 8% for selected states
      divider: "12", // 12% for dividers
      scrim: "32", // 32% for scrim overlay
      shadow: "40", // 40% for shadows
    };

    return opacities[level] || "ff";
  }
}
