import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Import all color modules
import getAdditionalElements from "./colors/additional-elements.js";
import getCommunicationElements from "./colors/communication-elements.js";
import getControlElements from "./colors/control-elements.js";
import getEditorColors from "./colors/editor-colors.js";
import getEditorGroupsTabs from "./colors/editor-groups-tabs.js";
import getEditorWidgetColors from "./colors/editor-widget-colors.js";
import getExtensionsAndQuickPickers from "./colors/extensions-and-quick-pickers.js";
import getGeneralColors from "./colors/general-colors.js";
import getKeybindingsAndShortcuts from "./colors/keybindings-and-shortcuts.js";
import getListsTreesSidebars from "./colors/lists-trees-sidebars.js";
import getMenusAndCommandCenter from "./colors/menus-and-command-center.js";
import getNotificationsAndBanners from "./colors/notifications-and-banners.js";
import getPanelsStatusBar from "./colors/panels-status-bar.js";
import getSettingsAndBreadcrumbs from "./colors/settings-and-breadcrumbs.js";
import getSnippetsAndSymbols from "./colors/snippets-and-symbols.js";
import getTerminalAndDebugging from "./colors/terminal-and-debugging.js";
import getTestingAndWelcomePage from "./colors/testing-and-welcome-page.js";
import getVersionControl from "./colors/version-control.js";

// Import all scope modules
import getCommentSettings from "./scopes/comment.js";
import getConstantSettings from "./scopes/constant.js";
import getEntitySettings from "./scopes/entity.js";
import getKeywordSettings from "./scopes/keywords.js";
import getMarkupSettings from "./scopes/markup.js";
import getMetaSettings from "./scopes/meta.js";
import getStorageSettings from "./scopes/storage.js";
import getStringSettings from "./scopes/string.js";
import getSupportSettings from "./scopes/support.js";
import getVariableSettings from "./scopes/variable.js";
import getVariousSettings from "./scopes/various.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ThemeBuilder {
  static buildTheme(scheme, name, filename) {
    const theme = {
      name,
      type: scheme.isDark ? "dark" : "light",
      $schema: "vscode://schemas/color-theme",
      colors: {
        ...getAdditionalElements(scheme),
        ...getCommunicationElements(scheme),
        ...getControlElements(scheme),
        ...getEditorColors(scheme),
        ...getEditorGroupsTabs(scheme),
        ...getEditorWidgetColors(scheme),
        ...getExtensionsAndQuickPickers(scheme),
        ...getGeneralColors(scheme),
        ...getKeybindingsAndShortcuts(scheme),
        ...getListsTreesSidebars(scheme),
        ...getMenusAndCommandCenter(scheme),
        ...getNotificationsAndBanners(scheme),
        ...getPanelsStatusBar(scheme),
        ...getSettingsAndBreadcrumbs(scheme),
        ...getSnippetsAndSymbols(scheme),
        ...getTerminalAndDebugging(scheme),
        ...getTestingAndWelcomePage(scheme),
        ...getVersionControl(scheme),
      },
      semanticHighlighting: true,
      tokenColors: [
        getCommentSettings(scheme),
        getConstantSettings(scheme),
        ...getEntitySettings(scheme),
        getKeywordSettings(scheme),
        ...getMarkupSettings(scheme),
        getMetaSettings(scheme),
        getStorageSettings(scheme),
        getStringSettings(scheme),
        ...getSupportSettings(scheme),
        ...getVariableSettings(scheme),
        ...getVariousSettings(scheme),
      ],
    };

    return theme;
  }

  static saveTheme(theme, filename) {
    const themesDir = resolve(__dirname, "../../themes");

    if (!existsSync(themesDir)) {
      mkdirSync(themesDir, { recursive: true });
    }

    const themePath = resolve(themesDir, `${filename}.json`);
    writeFileSync(themePath, JSON.stringify(theme, null, 2));

    return themePath;
  }

  static generateAllThemes(variants, createScheme) {
    const generated = [];

    for (const variant of variants) {
      const scheme = createScheme({
        isDark: variant.isDark,
        contrastLevel: variant.contrastLevel,
      });

      const theme = this.buildTheme(
        scheme,
        `Muya Material - ${variant.name}`,
        variant.filename
      );

      const path = this.saveTheme(theme, variant.filename);
      generated.push({ variant, path });
    }

    return generated;
  }
}
