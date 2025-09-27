export class ElevationColors {
  static mapElevationColors(scheme) {
    return {
      background: scheme.background,
      "surface.background": scheme.surface,
      "elevated_surface.background": scheme.surfaceContainerHigh,
      "panel.background": scheme.surfaceContainerLow,
      "status_bar.background": scheme.surfaceContainerHighest,
      "tab_bar.background": scheme.surfaceContainerHigh,
      "title_bar.background": scheme.surfaceContainerHighest,
      "title_bar.inactive_background": scheme.surfaceContainerHigh,
      "toolbar.background": scheme.surfaceContainerHigh,
      "element.background": scheme.surfaceContainer,
      "ghost_element.background": scheme.surface,
      "terminal.background": scheme.surfaceDim,
    };
  }
}
