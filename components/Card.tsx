import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TabBarIcon } from './navigation/TabBarIcon'
import { Book } from '@/constants/Books'
import { useRouter } from 'expo-router'
interface Props {
	type?: 'create' | 'view'
	data?: Book | null
}
export default function Card({ type = 'view', data = null }: Props) {
	const { theme } = useTheme()
	const { navigate } = useRouter()
	const textColor = { color: Colors[theme].text }
	return (
		<TouchableOpacity
			onPress={() => {
				navigate({ pathname: 'book', params: { bookId: data?.title } })
			}}
			style={[styles.c, { borderColor: Colors[theme].borderColor }]}
		>
			{type == 'view' ? (
				<>
					<Text style={[styles.text, textColor]}>
						{data && data.title}
					</Text>

					<View style={styles.footer}>
						<Text style={[textColor]}>
							Page {data && data.totalPages}
						</Text>
						<Text style={[textColor]}>10%</Text>
					</View>
				</>
			) : (
				<View style={[styles.create]}>
					<Text style={[textColor]}>Adicionar</Text>
					<TabBarIcon
						name='add'
						size={50}
					/>
				</View>
			)}
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	c: {
		borderWidth: 1,
		zIndex: -100,
		borderRadius: 5,
		//width: '48%',
		minWidth: 120,
		height: 100,
		padding: 10,
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},

	text: {
		width: '100%',
		textAlign: 'center'
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	create: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
})
