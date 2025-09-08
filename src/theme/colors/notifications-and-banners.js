export default function getNotificationsAndBanners(scheme) {
  return {
    // Notification colors
    "notificationCenter.border": scheme.outlineVariant,
    "notificationCenterHeader.background": scheme.surfaceContainerLowest,
    "notificationCenterHeader.foreground": scheme.onSurfaceVariant,
    "notificationToast.border": scheme.outlineVariant,
    "notifications.background": scheme.surfaceContainerLow,
    "notifications.border": scheme.surfaceContainerLowest,
    "notifications.foreground": scheme.onSurfaceVariant,
    // "notificationLink.foreground": scheme.primary,
    "notificationsErrorIcon.foreground": scheme.error,
    "notificationsWarningIcon.foreground": `${scheme.error}20`,
    "notificationsInfoIcon.foreground": scheme.primary,

    // Banner colors
    // "banner.background": scheme.surfaceContainerHigh,
    // "banner.foreground": scheme.onSurface,
    // "banner.iconForeground": scheme.primary,
  };
}
