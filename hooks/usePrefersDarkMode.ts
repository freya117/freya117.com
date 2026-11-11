import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-color-scheme: dark)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

// Reads the OS dark-mode preference and re-renders when it changes.
// Server snapshot is `true`, matching the previous initial state.
export function usePrefersDarkMode() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true
  )
}
