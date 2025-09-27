import { ElevationColors } from "./colors/elevation-colors.js";
import { StateColors } from "./colors/state-colors.js";
import { TextColors } from "./colors/text-colors.js";
import { EditorColors } from "./colors/editor-colors.js";
import { SpecialColors } from "./colors/special-colors.js";
import { TerminalColors } from "./colors/terminal-colors.js";
import { SpecificColors } from "./colors/specific-colors.js";

export class ZedColorsMapper {
  static mapSchemeToZed(scheme) {
    const allColors = {
      ...ElevationColors.mapElevationColors(scheme),
      ...StateColors.mapStateColors(scheme),
      ...TextColors.mapTextColors(scheme),
      ...EditorColors.mapEditorColors(scheme),
      ...SpecialColors.mapSpecialColors(scheme),
      ...TerminalColors.mapTerminalColors(scheme),
      ...SpecificColors.mapSpecificColors(scheme),
    };

    const uniqueColors = {};
    Object.keys(allColors).forEach((key) => {
      uniqueColors[key] = allColors[key];
    });

    return uniqueColors;
  }
}
