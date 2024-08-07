import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from './Card'

import { useBooks } from '@/ctx/booksContext'
import { GenerateId } from '@/app/class/GenerateId'
import { useLanguage } from '@/hooks/useLanguage'

export default function RecentsBook() {
	const {language}=useLanguage()
	const { theme } = useTheme()
    const { books, getAllBooks } = useBooks();
	useEffect(()=>{
		getAllBooks()   
	},[])
	
	return (
		<View style={styles.c}>
			<Text style={[{ color: Colors[theme].text }]}>{language.Recentes}</Text>
			<ScrollView  contentContainerStyle={styles.books}>
				{books?.length>0 && books?.map((book) => {
					return (
						<Card
							key={GenerateId.getId()}
							data={book}
						/>
					)
				})}

				<Card type='create' />
			</ScrollView>
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
		marginTop: 10,
		gap: 15,paddingVertical:20
	}
})
