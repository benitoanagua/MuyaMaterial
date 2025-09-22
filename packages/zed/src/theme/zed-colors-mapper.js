import { CoreColors } from "./colors/core-colors.js";
import { ElevationColors } from "./colors/elevation-colors.js";
import { StateColors } from "./colors/state-colors.js";
import { TextColors } from "./colors/text-colors.js";
import { EditorColors } from "./colors/editor-colors.js";
import { SpecialColors } from "./colors/special-colors.js";
import { TerminalColors } from "./colors/terminal-colors.js";
import { SchemeValidator } from "./scheme-validator.js";

export class ZedColorsMapper {
  static mapSchemeToZed(scheme) {
    SchemeValidator.validateScheme(scheme);

    return {
      // Core  color system (all properties)
      ...CoreColors.mapCoreColors(scheme),

      //  elevation system (all surface levels)
      ...ElevationColors.mapElevationColors(scheme),

      //  state system (interactive states)
      ...StateColors.mapStateColors(scheme),

      //  text system (text hierarchy)
      ...TextColors.mapTextColors(scheme),

      // Editor-specific  adaptations
      ...EditorColors.mapEditorColors(scheme),

      // Special  colors (shadows, inverse, etc.)
      ...SpecialColors.mapSpecialColors(scheme),

      // Terminal colors mapped to
      ...TerminalColors.mapTerminalColors(scheme),

      // Additional Zed-specific mappings
      ...this.mapZedSpecificColors(scheme),
    };
  }

  static mapZedSpecificColors(scheme) {
    return {
      // Zed-specific border variants
      "border.variant": scheme.outlineVariant,
      "border.disabled": `${scheme.outline}${SchemeValidator.getOpacity(
        "disabled"
      )}`,
      "border.transparent": `${scheme.outline}${SchemeValidator.getOpacity(
        "divider"
      )}`,

      // Scrollbar colors using  surfaces
      "scrollbar.thumb.background": scheme.surfaceVariant,
      "scrollbar.thumb.hover_background": scheme.primary,
      "scrollbar.track.background": scheme.surfaceContainerLow,

      // Accent system using  color roles
      accents: [scheme.primary, scheme.secondary, scheme.tertiary],
    };
  }
}
