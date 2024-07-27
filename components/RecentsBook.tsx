import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
import { BOOKS } from '@/constants/Books'
import { BookRepository } from '@/app/class/BookRepository'
import { AsyncStorageService } from '@/app/class/AsyncStorageService'
import { Book } from '@/app/class/Book'

export default function RecentsBook() {
	const { theme } = useTheme()
	const storage = new AsyncStorageService()
	const bookRepository = new BookRepository(storage)
	const [books,setBook] = useState<Book[]>([])
	return (
		<View style={styles.c}>
			<Text style={[{ color: Colors[theme].text }]}>Recents</Text>
			<View style={styles.books}>
				{books.map((book) => {
					return (
						<Card
							key={book.id}
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
		//justifyContent: 'space-between',
		marginTop: 10,
		//flexBasis: 1,
		gap: 15
	}
})
