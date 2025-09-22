import { SchemeValidator } from "../scheme-validator.js";

export class ElevationColors {
  static mapElevationColors(scheme) {
    return {
      // Surface elevation hierarchy ( elevation system)
      "surface.background": scheme.surface,
      "elevated_surface.background": scheme.surfaceContainerHigh,

      // Complete container hierarchy
      "element.background": scheme.surfaceContainer,
      "ghost_element.background": scheme.surface,

      // Panel backgrounds with proper elevation
      "panel.background": scheme.surfaceContainerHigh,
      "status_bar.background": scheme.surfaceContainerHighest,
      "tab_bar.background": scheme.surfaceContainerHigh,
      "title_bar.background": scheme.surfaceContainerHighest,
      "title_bar.inactive_background": scheme.surfaceContainerHigh,
      "toolbar.background": scheme.surfaceContainerHigh,

      // Editor specific elevations
      "editor.background": scheme.background,
      "editor.gutter.background": scheme.surfaceContainerLow,
      "editor.subheader.background": scheme.surfaceContainer,

      // Terminal elevation
      "terminal.background": scheme.surfaceContainerLowest,
    };
  }

  static getSurfaceForElevation(scheme, elevation) {
    const elevationMap = {
      lowest: scheme.surfaceContainerLowest,
      low: scheme.surfaceContainerLow,
      medium: scheme.surfaceContainer,
      high: scheme.surfaceContainerHigh,
      highest: scheme.surfaceContainerHighest,
      dim: scheme.surfaceDim,
      bright: scheme.surfaceBright,
    };

    return elevationMap[elevation] || scheme.surface;
  }
}
