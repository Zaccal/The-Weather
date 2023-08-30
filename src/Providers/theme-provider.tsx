import useActions from "@/hooks/useActions"
import useTypedSelector from "@/hooks/useTypedSelector"
import { TypeTheme } from "@/types/Settings.interface"
import { createContext, useContext, useEffect, useState } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: TypeTheme
  storageKey?: string
}

type ThemeProviderState = {
  theme: TypeTheme
  setTheme: (theme: TypeTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) {
  const localStorageTheme = useTypedSelector(state => state.settings.theme) 
  const {changeTheme} = useActions()
  const [theme, setTheme] = useState<TypeTheme>(() => (localStorageTheme || defaultTheme))

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: TypeTheme) => {
      // localStorage.setItem(storageKey, theme)
      changeTheme(theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
