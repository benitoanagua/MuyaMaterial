export class SpecificColors {
  static mapSpecificColors(scheme) {
    return {
      border: scheme.outlineVariant,
      "border.variant": scheme.primary,
      "border.disabled": scheme.outline,
      "border.transparent": scheme.secondary,
      "border.focused": scheme.primary,
      "border.selected": scheme.secondary,

      "scrollbar.thumb.background": `${scheme.primary}33`,
      "scrollbar.thumb.border": scheme.primary,
      "scrollbar.thumb.hover_background": scheme.onSurfaceVariant,
      "scrollbar.track.background": scheme.surfaceContainer,
      "scrollbar.track.border": `${scheme.onBackground}12`,

      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      "pane.focused_border": scheme.onBackground,
      "pane_group.border": scheme.outlineVariant,
      "panel.focused_border": scheme.onBackground,

      "panel.indent_guide": `${scheme.outlineVariant}99`,
      "panel.indent_guide_active": scheme.onSurfaceVariant,
      "panel.indent_guide_hover": scheme.primary,

      "tab.active_background": scheme.background,
      "tab.inactive_background": scheme.surfaceContainerHigh,

      "background.appearance": "opaque",
    };
  }
}
