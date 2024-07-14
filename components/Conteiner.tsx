import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { ReactNode } from 'react'
import { View } from 'react-native'
import Header from './Header'

interface ContainerProps {
	children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	const { theme } = useTheme()
	return (
		<View style={{ flex: 1, backgroundColor: Colors[theme].background }}>
			<Header />
			{children}
		</View>
	)
}
