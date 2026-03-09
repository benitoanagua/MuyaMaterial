import { ElevationColors } from "./colors/elevation-colors.js";
import { StateColors } from "./colors/state-colors.js";
import { TextColors } from "./colors/text-colors.js";
import { EditorColors } from "./colors/editor-colors.js";
import { TerminalColors } from "./colors/terminal-colors.js";
import { BorderColors } from "./colors/border-colors.js";
import { VcsColors } from "./colors/vcs-colors.js";
import { PlayerColors } from "./colors/player-colors.js";
import { GeneralColors } from "./colors/general-colors.js";

export class ZedColorsMapper {
  static mapSchemeToZed(scheme, terminalColors) {
    return {
      ...ElevationColors.mapElevationColors(scheme),
      ...StateColors.mapStateColors(scheme, terminalColors),
      ...TextColors.mapTextColors(scheme),
      ...EditorColors.mapEditorColors(scheme, terminalColors),
      ...TerminalColors.mapTerminalColors(scheme, terminalColors),
      ...BorderColors.mapBorderColors(scheme),
      ...VcsColors.mapVcsColors(scheme, terminalColors),
      ...PlayerColors.mapPlayerColors(scheme, terminalColors),
      ...GeneralColors.mapGeneralColors(scheme),
    };
  }
}