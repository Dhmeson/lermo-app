import React, { useState, useEffect, useRef } from 'react'
import { View,  StyleSheet} from 'react-native'
import { useRouter } from 'expo-router'
import { useRoute } from '@react-navigation/native'

import { Colors } from '@/constants/Colors'
import { Container } from '@/components/Conteiner'
import { useSettings } from '@/hooks/useSettings'
import { useBooks } from '@/ctx/booksContext'
import { BookRouteProp } from '@/types/routers'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { useFont } from '@/ctx/fontsContext'
import WordDisplay from '@/components/WordDisplay'
import ControlButtons from '@/components/ControlButtons'
import useWordManagerActions from '@/hooks/useWordActions'



export default function BookScreen() {
	const { params } = useRoute<BookRouteProp>()
	const { navigate } = useRouter()

	if (!params) {
		navigate({ pathname: '/', params: {} })
		return <View></View>
	}

	const {books}=useBooks()
	const book = books.find(book => book.id===params.bookId)
	const {pause,start,word,onTouchScreen}=useWordManagerActions({book})

	
	return (
		<Container>
			<View
				style={styles.container}
				onTouchStart={onTouchScreen}
			>	
				<WordDisplay  word={word}/>
				<ControlButtons onPause={pause} onPlay={start}/>
			</View>
			
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 1,
		zIndex: -10,
		marginTop: '30%'
	},

})
