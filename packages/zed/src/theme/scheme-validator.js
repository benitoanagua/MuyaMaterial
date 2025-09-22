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
      throw new Error(`Missing properties: ${missing.join(", ")}`);
    }

    return true;
  }

  static getOpacity(level) {
    const opacities = {
      disabled: "90",
      hover: "25",
      focus: "30",
      pressed: "30",
      dragged: "35",
      selected: "25",
      divider: "30",
      scrim: "60",
      shadow: "70",
    };

    return opacities[level] || "ff";
  }
}
