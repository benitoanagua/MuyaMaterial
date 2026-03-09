export class ElevationColors {
  static mapElevationColors(scheme) {
    return {
      background: scheme.surface,
      "background.appearance": "opaque",

      "surface.background": scheme.surface,
      "elevated_surface.background": scheme.surfaceContainerHigh,

      // Framing elements
      "title_bar.background": scheme.surfaceContainerHighest,
      "title_bar.inactive_background": scheme.surfaceContainerHigh,
      "status_bar.background": scheme.surfaceContainerHighest,
      "tab_bar.background": scheme.surfaceContainer,
      "toolbar.background": scheme.surfaceContainer,

      // Panes and Panels
      "pane.background": scheme.surfaceContainerLow,
      "panel.background": scheme.surfaceContainer,
      "editor.background": scheme.surface,
      "terminal.background": scheme.surfaceContainerLowest,

      // Elements
      "element.background": scheme.surfaceContainerLow,
      "ghost_element.background": "#00000000",
    };
  }
}
