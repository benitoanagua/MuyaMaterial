export class ZedColorsMapper {
  static mapSchemeToZed(scheme) {
    return {
      // Colores base
      background: scheme.background,
      surface: { background: scheme.surface },
      elevated_surface: { background: scheme.surfaceContainerHigh },

      // Texto
      text: scheme.onSurface,
      text: { accent: scheme.primary },
      text: { muted: scheme.onSurfaceVariant },
      text: { disabled: `${scheme.onSurface}60` },
      text: { placeholder: `${scheme.onSurfaceVariant}80` },

      // Bordes
      border: scheme.outline,
      border: { variant: scheme.outlineVariant },
      border: { focused: scheme.primary },
      border: { selected: scheme.primary },
      border: { disabled: `${scheme.outline}40` },
      border: { transparent: `${scheme.outline}20` },

      // Elementos de UI
      element: {
        background: scheme.surfaceContainer,
        hover: scheme.surfaceContainerHigh,
        active: scheme.primaryContainer,
        selected: scheme.primaryContainer,
        disabled: `${scheme.surfaceContainer}60`,
      },

      ghost_element: {
        background: scheme.surface,
        hover: scheme.surfaceContainer,
        active: scheme.surfaceContainerHigh,
        selected: scheme.surfaceContainerHigh,
        disabled: `${scheme.surface}60`,
      },

      // Editor
      editor: {
        background: scheme.background,
        foreground: scheme.onBackground,
        gutter: { background: scheme.surfaceContainer },
        active_line: { background: `${scheme.surfaceContainer}50` },
        highlighted_line: { background: `${scheme.surfaceContainer}30` },
        line_number: scheme.onSurfaceVariant,
        active_line_number: scheme.primary,
        indent_guide: `${scheme.outline}30`,
        indent_guide_active: `${scheme.primary}50`,
        wrap_guide: `${scheme.outline}20`,
        active_wrap_guide: `${scheme.primary}30`,
        invisible: `${scheme.outline}40`,
        subheader: { background: scheme.surfaceContainer },
      },

      // Resaltado de documento
      editor: {
        document_highlight: {
          read_background: `${scheme.secondaryContainer}30`,
          write_background: `${scheme.primaryContainer}30`,
          bracket_background: `${scheme.primary}20`,
        },
      },

      // Pestañas
      tab: {
        active_background: scheme.surface,
        inactive_background: scheme.surfaceContainerHigh,
      },
      tab_bar: { background: scheme.surfaceContainerHighest },

      // Barra de estado
      status_bar: { background: scheme.surfaceContainerHighest },

      // Paneles
      panel: { background: scheme.surfaceContainerHigh },
      panel: { focused_border: scheme.primary },

      // Pane
      pane: { focused_border: scheme.primary },
      pane_group: { border: scheme.outlineVariant },

      // Barras de desplazamiento
      scrollbar: {
        thumb: {
          background: `${scheme.outline}40`,
          hover_background: `${scheme.outline}60`,
          border: scheme.outlineVariant,
        },
        track: {
          background: `${scheme.outline}20`,
          border: scheme.outlineVariant,
        },
      },

      // Iconos
      icon: scheme.onSurfaceVariant,
      icon: { accent: scheme.primary },
      icon: { muted: `${scheme.onSurfaceVariant}60` },
      icon: { disabled: `${scheme.onSurfaceVariant}40` },
      icon: { placeholder: `${scheme.onSurfaceVariant}50` },

      // Estados del sistema
      error: scheme.error,
      error: { background: `${scheme.error}20`, border: scheme.error },

      warning: scheme.tertiary,
      warning: { background: `${scheme.tertiary}20`, border: scheme.tertiary },

      info: scheme.primary,
      info: { background: `${scheme.primary}20`, border: scheme.primary },

      success: scheme.secondary,
      success: {
        background: `${scheme.secondary}20`,
        border: scheme.secondary,
      },

      hint: scheme.secondary,
      hint: { background: `${scheme.secondary}20`, border: scheme.secondary },

      // Control de versiones
      created: scheme.secondary,
      created: {
        background: `${scheme.secondary}20`,
        border: scheme.secondary,
      },

      modified: scheme.primary,
      modified: { background: `${scheme.primary}20`, border: scheme.primary },

      deleted: scheme.error,
      deleted: { background: `${scheme.error}20`, border: scheme.error },

      conflicted: scheme.tertiary,
      conflicted: {
        background: `${scheme.tertiary}20`,
        border: scheme.tertiary,
      },

      renamed: scheme.secondary,
      renamed: {
        background: `${scheme.secondary}20`,
        border: scheme.secondary,
      },

      ignored: scheme.onSurfaceVariant,
      ignored: {
        background: `${scheme.onSurfaceVariant}20`,
        border: scheme.onSurfaceVariant,
      },

      hidden: scheme.onSurfaceVariant,
      hidden: {
        background: `${scheme.onSurfaceVariant}20`,
        border: scheme.onSurfaceVariant,
      },

      // Búsqueda
      search: { match_background: `${scheme.tertiary}40` },

      // Objetivo de drop
      drop_target: { background: `${scheme.primary}20` },

      // Barra de título
      title_bar: {
        background: scheme.surfaceContainerHighest,
        inactive_background: scheme.surfaceContainerHigh,
      },

      // Barra de herramientas
      toolbar: { background: scheme.surfaceContainerHigh },

      // Terminal
      terminal: {
        background: scheme.surfaceContainerLow,
        foreground: scheme.onSurface,
        bright_foreground: scheme.onSurface,
        dim_foreground: `${scheme.onSurface}80`,
        ansi: {
          black: scheme.outlineVariant,
          red: scheme.error,
          green: scheme.tertiary,
          yellow: scheme.tertiary,
          blue: scheme.primary,
          magenta: scheme.secondary,
          cyan: scheme.tertiary,
          white: scheme.onSurface,
          bright_black: scheme.outline,
          bright_red: scheme.error,
          bright_green: scheme.tertiary,
          bright_yellow: scheme.tertiary,
          bright_blue: scheme.primary,
          bright_magenta: scheme.error,
          bright_cyan: scheme.tertiary,
          bright_white: scheme.onSurface,
        },
      },

      // Acentos
      accents: [scheme.primary, scheme.secondary, scheme.tertiary],

      // Jugadores (colaboración)
      players: [
        {
          background: scheme.primaryContainer,
          cursor: scheme.primary,
          selection: `${scheme.primary}40`,
        },
        {
          background: scheme.secondaryContainer,
          cursor: scheme.secondary,
          selection: `${scheme.secondary}40`,
        },
      ],
    };
  }
}
