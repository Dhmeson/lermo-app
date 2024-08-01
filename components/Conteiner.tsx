import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { ReactNode } from 'react'
import { View } from 'react-native'
import Header from './Header'
import { useSettings } from '@/hooks/useSettings'
import { BottomModal } from './BottomModal'

interface ContainerProps {
	children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	const { theme } = useTheme()
	const { closeSettings ,isOpenSettings} = useSettings()
	return (
		<View
			id='conteiner'
			style={{ flex: 1, backgroundColor: Colors[theme].background }}
		>
			<Header />
			{children}

		{
			isOpenSettings && <BottomModal/>
		}
			
		</View>
	)
}
