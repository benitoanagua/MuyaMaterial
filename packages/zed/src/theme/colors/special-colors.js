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
          background: scheme.primary,
          selection: `${scheme.primary}3D`,
        },
        {
          cursor: scheme.secondary,
          background: scheme.secondary,
          selection: `${scheme.secondary}3D`,
        },
        {
          cursor: scheme.tertiary,
          background: scheme.tertiary,
          selection: `${scheme.tertiary}3D`,
        },
        {
          cursor: term.normal.red,
          background: term.normal.red,
          selection: `${term.normal.red}3D`,
        },
      ],

      "drop_target.background": `${scheme.primaryContainer}66`,
    };
  }
}
