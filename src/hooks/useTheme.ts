import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme | null) ?? systemTheme()
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    const icon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
    if (icon) icon.href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
  }, [theme])

  return { theme, setTheme: setThemeState }
}
