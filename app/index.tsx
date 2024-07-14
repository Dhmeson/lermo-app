import { Container } from '@/components/Conteiner'
import RecentsBook from '@/components/RecentsBook'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Index() {
	const { theme, toggleTheme } = useTheme()
	return (
		<Container>
			{/* <TouchableOpacity onPress={toggleTheme}>
				<Text>Change</Text>
			</TouchableOpacity> */}
			<RecentsBook />
		</Container>
	)
}
