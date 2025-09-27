export class SpecificColors {
  static mapSpecificColors(scheme) {
    return {
      border: `${scheme.outline}80`,
      "border.variant": `${scheme.outlineVariant}60`,
      "border.disabled": `${scheme.outline}40`,
      "border.transparent": `${scheme.outline}20`,
      "border.focused": scheme.primary,
      "border.selected": scheme.secondary,

      "scrollbar.thumb.background": `${scheme.primary}40`,
      "scrollbar.thumb.border": `${scheme.primary}60`,
      "scrollbar.thumb.hover_background": scheme.primary,
      "scrollbar.track.background": scheme.surfaceContainerLow,
      "scrollbar.track.border": `${scheme.outlineVariant}40`,

      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      "pane.focused_border": scheme.primary,
      "pane_group.border": `${scheme.outlineVariant}40`,
      "panel.focused_border": scheme.primary,

      "panel.indent_guide": `${scheme.outlineVariant}50`,
      "panel.indent_guide_active": scheme.primary,
      "panel.indent_guide_hover": scheme.secondary,

      "tab.active_background": scheme.background,
      "tab.inactive_background": scheme.surfaceContainerLow,

      "background.appearance": "opaque",
    };
  }
}
