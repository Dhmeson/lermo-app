import React, { createContext, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

export interface ThemeContextProps {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined
)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [theme, setTheme] = useState<Theme>('light')

	const toggleTheme = () => {
		try {
			setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))

		} catch (error) {
			console.error(error)
		}
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
