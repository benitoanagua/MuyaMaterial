export class SpecialColors {
  static mapSpecialColors(scheme, term) {
    return {
      created: scheme.secondary,
      "created.background": `${scheme.secondary}26`,
      "created.border": scheme.secondary,

      modified: scheme.primary,
      "modified.background": `${scheme.primary}26`,
      "modified.border": scheme.primary,

      deleted: scheme.error,
      "deleted.background": `${scheme.error}26`,
      "deleted.border": scheme.error,

      conflict: scheme.tertiary,
      "conflict.background": `${scheme.tertiary}26`,
      "conflict.border": scheme.tertiary,

      renamed: scheme.secondary,
      "renamed.background": `${scheme.secondary}26`,
      "renamed.border": scheme.secondary,

      ignored: scheme.onSurfaceVariant,
      "ignored.background": scheme.surfaceContainer,
      "ignored.border": scheme.onSurfaceVariant,

      hidden: scheme.onSurfaceVariant,
      "hidden.background": scheme.surfaceContainer,
      "hidden.border": scheme.outlineVariant,

      unreachable: scheme.error,
      "unreachable.background": `${scheme.error}1F`,
      "unreachable.border": scheme.error,

      players: [
        {
          cursor: scheme.primary,
          selection: `${scheme.onSurfaceVariant}80`,
          background: scheme.primary,
        },
        {
          cursor: scheme.secondary,
          selection: `${scheme.secondary}33`,
          background: scheme.secondary,
        },
        {
          cursor: scheme.tertiary,
          selection: `${scheme.tertiary}33`,
          background: scheme.tertiary,
        },
        {
          cursor: term.normal.red,
          selection: `${term.normal.red}33`,
          background: term.normal.red,
        },
      ],

      "drop_target.background": `${scheme.outlineVariant}66`,
    };
  }
}
