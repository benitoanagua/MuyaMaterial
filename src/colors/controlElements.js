export default function getControlElements(scheme) {
  return {
    // Button control
    "button.background": scheme.primary,
    "button.foreground": scheme.onPrimary,
    "button.hoverBackground": `${scheme.primary}E0`,

    // Input control
    "input.background": scheme.surfaceContainerHighest,
    "input.foreground": scheme.onSurface,
    "input.border": scheme.outline,
    "input.placeholderForeground": `${scheme.onSurface}60`,

    // Dropdown control
    "dropdown.background": scheme.surfaceContainerHighest,
    "dropdown.foreground": scheme.onSurface,
    "dropdown.border": scheme.outline,
  };
}
