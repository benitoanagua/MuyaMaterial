export class VcsColors {
  static mapVcsColors(scheme, term) {
    return {
      // Standard VCS Colors
      "version_control.added": term.normal.green,
      "version_control.modified": term.normal.blue,
      "version_control.deleted": term.normal.red,
      "version_control.word_added": `${term.normal.green}4D`,
      "version_control.word_deleted": `${term.normal.red}4D`,
      
      // Status Indicators (Project Panel, etc.)
      created: term.normal.green,
      "created.background": `${term.normal.green}33`,
      "created.border": term.normal.green,

      modified: term.normal.blue,
      "modified.background": `${term.normal.blue}33`,
      "modified.border": term.normal.blue,

      deleted: term.normal.red,
      "deleted.background": `${term.normal.red}33`,
      "deleted.border": term.normal.red,

      conflict: term.normal.magenta,
      "conflict.background": `${term.normal.magenta}33`,
      "conflict.border": term.normal.magenta,

      ignored: scheme.onSurfaceVariant,
      "ignored.background": "#00000000",
      
      "drop_target.background": `${scheme.primaryContainer}80`,
    };
  }
}
