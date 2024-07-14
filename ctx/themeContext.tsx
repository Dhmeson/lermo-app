import React, { createContext, useContext, useState, ReactNode } from 'react'

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
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

// export const useTheme = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
