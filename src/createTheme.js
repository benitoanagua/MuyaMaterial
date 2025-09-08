import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

// Import color functions
import getGeneralColors from "./colors/generalColors.js";
import getEditorColors from "./colors/editorColors.js";
import getEditorGroupsAndTabsColors from "./colors/editorGroupsAndTabs.js";
import getPanelsAndStatusBar from "./colors/panelsAndStatusBar.js";
import getListsTreesAndSidebars from "./colors/listsTreesAndSidebars.js";
import getControlElements from "./colors/controlElements.js";

// Import scope functions
import getCommentSettings from "./scopes/Comment.js";
import getConstantSettings from "./scopes/Constant.js";
import getKeywordSettings from "./scopes/Keywords.js";
import getEntitySettings from "./scopes/Entity.js";
import getStringSettings from "./scopes/String.js";
import getVariableSettings from "./scopes/Variable.js";
import getSupportSettings from "./scopes/Support.js";

function ensureDirectoryExists(dir) {
  if (!mkdirSync(dir, { recursive: true })) {
    mkdirSync(dir, { recursive: true });
  }
}

export function createTheme(scheme, name, type) {
  const themeDir = resolve(process.cwd(), "themes");
  ensureDirectoryExists(themeDir);

  const theme = {
    name,
    type: type === "dark" ? "dark" : "light",
    $schema: "vscode://schemas/color-theme",
    colors: {
      ...getGeneralColors(scheme),
      ...getEditorColors(scheme),
      ...getEditorGroupsAndTabsColors(scheme),
      ...getPanelsAndStatusBar(scheme),
      ...getListsTreesAndSidebars(scheme),
      ...getControlElements(scheme),
    },
    semanticHighlighting: true,
    tokenColors: [
      getCommentSettings(scheme),
      getConstantSettings(scheme),
      getKeywordSettings(scheme),
      ...getEntitySettings(scheme),
      getStringSettings(scheme),
      ...getVariableSettings(scheme),
      ...getSupportSettings(scheme),
    ],
  };

  const themeFilePath = resolve(
    themeDir,
    `${name.toLowerCase().replace(/\s+/g, "-")}.json`
  );
  writeFileSync(themeFilePath, JSON.stringify(theme, null, 2));

  console.log(`✅ ${name}.json generado`);
  return theme;
}
