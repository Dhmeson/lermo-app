import React, { createContext, useState, ReactNode } from 'react'

export interface SettingsContextProps {
	speed: number
	changeSpeed: () => void
	isOpenSettings: boolean
	closeSettings: () => void
	openSettings: () => void
}

export const SettingsContext = createContext<SettingsContextProps | undefined>(
	undefined
)

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [speed, setSpeed] = useState<number>(0)
	const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false)

	const closeSettings = () => {
		setIsOpenSettings(false)
	}
	const openSettings = () => {
		setIsOpenSettings(true)
	}
	const changeSpeed = () => {
		setSpeed((prevSpeed) => (prevSpeed + 1) % 4)
	}

	return (
		<SettingsContext.Provider
			value={{
				speed,
				changeSpeed,
				closeSettings,
				isOpenSettings,
				openSettings
			}}
		>
			{children}
		</SettingsContext.Provider>
	)
}
