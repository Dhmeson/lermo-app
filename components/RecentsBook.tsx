import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
import { BOOKS } from '@/constants/Books'

export default function RecentsBook() {
	const { theme } = useTheme()
	return (
		<View style={styles.c}>
			<Text style={[{ color: Colors[theme].text }]}>Recents</Text>
			<View style={styles.books}>
				{BOOKS.map((book) => {
					return (
						<Card
							key={book.title}
							data={book}
						/>
					)
				})}

				<Card type='create' />
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	c: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 23,
		marginTop: 10,
		zIndex: -100
	},
	books: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 10,
		gap: 15
	}
})
