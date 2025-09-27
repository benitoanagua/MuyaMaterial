export class SpecificColors {
  static mapSpecificColors(scheme) {
    return {
      border: scheme.outline,
      "border.variant": scheme.outlineVariant,
      "border.disabled": `${scheme.outline}90`,
      "border.transparent": `${scheme.outline}30`,
      "border.focused": scheme.inversePrimary,
      "border.selected": scheme.inversePrimary,

      "scrollbar.thumb.background": scheme.surfaceVariant,
      "scrollbar.thumb.border": scheme.outline,
      "scrollbar.thumb.hover_background": scheme.primary,
      "scrollbar.track.background": scheme.surfaceContainer,
      "scrollbar.track.border": scheme.outlineVariant,

      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      "element.focus.background": `${scheme.inversePrimary}4d`,

      "pane.focused_border": scheme.inversePrimary,
      "pane_group.border": scheme.outlineVariant,
      "panel.focused_border": scheme.inversePrimary,

      "panel.indent_guide": scheme.outlineVariant,
      "panel.indent_guide_active": scheme.inversePrimary,
      "panel.indent_guide_hover": scheme.primary,

      "tab.active_background": scheme.background,
      "tab.inactive_background": scheme.surfaceContainerHigh,

      "background.appearance": "opaque",
    };
  }
}
