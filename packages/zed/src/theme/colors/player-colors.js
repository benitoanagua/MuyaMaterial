export class PlayerColors {
  static mapPlayerColors(scheme, term) {
    return {
      players: [
        {
          cursor: scheme.primary,
          background: scheme.primary,
          selection: `${scheme.primaryContainer}80`,
        },
        {
          cursor: scheme.secondary,
          background: scheme.secondary,
          selection: `${scheme.secondaryContainer}80`,
        },
        {
          cursor: scheme.tertiary,
          background: scheme.tertiary,
          selection: `${scheme.tertiaryContainer}80`,
        },
        {
          cursor: term.normal.red,
          background: term.normal.red,
          selection: `${scheme.errorContainer}80`,
        },
        {
          cursor: term.normal.cyan,
          background: term.normal.cyan,
          selection: `${scheme.primaryContainer}80`,
        },
      ],
    };
  }
}
