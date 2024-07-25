import { SettingsContext, SettingsContextProps } from '@/ctx/settingsContext'
import { useContext } from 'react'

export const useSettings = (): SettingsContextProps => {
	const context = useContext(SettingsContext)
	if (context === undefined) {
		throw new Error('useSettings must be used within a SettingsProvider')
	}
	return context
}
