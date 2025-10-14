export class SpecificColors {
  static mapSpecificColors(scheme) {
    return {
      border: scheme.outlineVariant,
      "border.variant": scheme.outlineVariant,
      "border.disabled": scheme.outline,
      "border.transparent": scheme.outline,
      "border.focused": scheme.primary,
      "border.selected": scheme.secondary,

      "scrollbar.thumb.background": scheme.primary,
      "scrollbar.thumb.border": scheme.primary,
      "scrollbar.thumb.hover_background": scheme.primary,
      "scrollbar.track.background": scheme.surfaceContainer,
      "scrollbar.track.border": scheme.outlineVariant,

      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      "pane.focused_border": scheme.primary,
      "pane_group.border": scheme.outlineVariant,
      "panel.focused_border": scheme.primary,

      "panel.indent_guide": scheme.outlineVariant,
      "panel.indent_guide_active": scheme.primary,
      "panel.indent_guide_hover": scheme.secondary,

      "tab.active_background": scheme.background,
      "tab.inactive_background": scheme.surfaceContainerHigh,

      "background.appearance": "opaque",
    };
  }
}
