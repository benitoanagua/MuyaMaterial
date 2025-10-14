export class SpecialColors {
  static mapSpecialColors(scheme, term) {
    return {
      created: term.normal.green,
      "created.background": scheme.secondaryContainer,
      "created.border": term.normal.green,

      modified: term.normal.blue,
      "modified.background": scheme.primaryContainer,
      "modified.border": term.normal.blue,

      deleted: term.normal.red,
      "deleted.background": scheme.errorContainer,
      "deleted.border": term.normal.red,

      conflict: term.normal.yellow,
      "conflict.background": scheme.tertiaryContainer,
      "conflict.border": term.normal.yellow,

      renamed: term.normal.green,
      "renamed.background": scheme.secondaryContainer,
      "renamed.border": term.normal.green,

      ignored: scheme.onSurfaceVariant,
      "ignored.background": scheme.surfaceContainer,
      "ignored.border": scheme.outlineVariant,

      hidden: scheme.onSurfaceVariant,
      "hidden.background": scheme.surfaceContainer,
      "hidden.border": scheme.outlineVariant,

      unreachable: term.normal.red,
      "unreachable.background": scheme.errorContainer,
      "unreachable.border": term.normal.red,

      players: [
        {
          cursor: scheme.primary,
          selection: `${scheme.primary}4d`,
          background: scheme.primary,
        },
        {
          cursor: scheme.secondary,
          selection: `${scheme.secondary}4d`,
          background: scheme.secondary,
        },
        {
          cursor: scheme.tertiary,
          selection: `${scheme.tertiary}4d`,
          background: scheme.tertiary,
        },
        {
          cursor: term.normal.red,
          selection: `${term.normal.red}4d`,
          background: term.normal.red,
        },
      ],

      "drop_target.background": `${scheme.primaryContainer}80`,
    };
  }
}
