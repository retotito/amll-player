// Utility to check if running in Tauri (v2 uses __TAURI_INTERNALS__ with metadata)
export function isTauri() {
  return !!(window && (window as any).__TAURI_INTERNALS__?.metadata);
}
