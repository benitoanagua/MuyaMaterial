import { CoreColors } from "./colors/core-colors.js";
import { ElevationColors } from "./colors/elevation-colors.js";
import { StateColors } from "./colors/state-colors.js";
import { TextColors } from "./colors/text-colors.js";
import { EditorColors } from "./colors/editor-colors.js";
import { SpecialColors } from "./colors/special-colors.js";
import { TerminalColors } from "./colors/terminal-colors.js";

export class ZedColorsMapper {
  static mapSchemeToZed(scheme) {
    return {
      ...CoreColors.mapCoreColors(scheme),
      ...ElevationColors.mapElevationColors(scheme),
      ...StateColors.mapStateColors(scheme),
      ...TextColors.mapTextColors(scheme),
      ...EditorColors.mapEditorColors(scheme),
      ...SpecialColors.mapSpecialColors(scheme),
      ...TerminalColors.mapTerminalColors(scheme),
      ...this.mapZedSpecificColors(scheme),
    };
  }

  static mapZedSpecificColors(scheme) {
    return {
      "border.variant": scheme.outlineVariant,
      "border.disabled": `${scheme.outline}90`,
      "border.transparent": `${scheme.outline}30`,

      "scrollbar.thumb.background": scheme.surfaceVariant,
      "scrollbar.thumb.hover_background": scheme.primary,
      "scrollbar.track.background": scheme.surfaceContainer,

      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      "border.focused": scheme.inversePrimary,
      "border.selected": scheme.inversePrimary,
      "element.focus.background": `${scheme.inversePrimary}4d`,

      "sidebar.background": scheme.surfaceDim,
      "sidebar.foreground": scheme.onSurface,
      "sidebar.section_header.background": scheme.surfaceContainerHigh,

      "panel.background": scheme.surfaceDim,
      "panel.foreground": scheme.onSurface,

      "status_bar.background": scheme.surfaceContainerHighest,
      "status_bar.foreground": scheme.onSurface,

      "tab.active_background": scheme.background,
      "tab.inactive_background": scheme.surfaceContainerHigh,
      "tab.active_foreground": scheme.onBackground,
      "tab.inactive_foreground": scheme.onSurfaceVariant,
    };
  }
}
