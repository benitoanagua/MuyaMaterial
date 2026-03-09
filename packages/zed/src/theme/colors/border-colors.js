export class BorderColors {
  static mapBorderColors(scheme) {
    return {
      border: scheme.outlineVariant,
      "border.variant": scheme.outlineVariant,
      "border.focused": scheme.primary,
      "border.selected": scheme.primary,
      "border.disabled": `${scheme.outlineVariant}80`,
      "border.transparent": "#00000000",

      "pane.focused_border": scheme.primary,
      "pane_group.border": scheme.outlineVariant,
      "panel.focused_border": scheme.primary,
    };
  }
}
