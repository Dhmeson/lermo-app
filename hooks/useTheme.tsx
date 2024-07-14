import { ThemeContext, ThemeContextProps } from '@/ctx/themeContext'
import { useContext } from 'react'

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
