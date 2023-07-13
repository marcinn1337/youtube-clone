import { useState, useContext, createContext } from 'react'

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(true)
	const toggleTheme = () => {
		setDarkTheme(prevDarkTheme => !prevDarkTheme)
	}

	return <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}
