import { useState, useEffect, useContext, createContext } from 'react'

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)
export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(false)
	useEffect(() => {
		let darkTheme = false
		// Check system prefered theme by css media query.
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkTheme = true
		}
		// User prefered theme is set manualy by theme button located in sidebar. This variable has higher priority than system prefered theme and is saved in local storage. In that way, user don't have to chose theme every time after refreshing page. Some browsers don't catch system prefered theme so user preference is more important.
		if (localStorage.getItem('userPreferedDark')) {
			darkTheme = JSON.parse(localStorage.getItem('userPreferedDark'))
		}
		setDarkTheme(darkTheme)
	}, [])
	const toggleTheme = () => {
		localStorage.setItem('userPreferedDark', JSON.stringify(!darkTheme))
		setDarkTheme(prevDarkTheme => !prevDarkTheme)
	}

	return <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}
