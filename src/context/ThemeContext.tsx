import { createContext, useContext } from 'react'
import type { Theme } from '@/types'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)
