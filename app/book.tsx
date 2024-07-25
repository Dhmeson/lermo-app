import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Book, BOOKS } from '@/constants/Books'
import { Colors } from '@/constants/Colors'
import { Container } from '@/components/Conteiner'
import { useSettings } from '@/hooks/useSettings'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { useTheme } from '@/hooks/useTheme'

type BookRouteParams = {
	bookId: string
}

type RootStackParamList = {
	Book: BookRouteParams
}

// Tipagem do useRoute
type BookRouteProp = RouteProp<RootStackParamList, 'Book'>

export default function BookScreen() {
	const { params } = useRoute<BookRouteProp>()
	const { theme } = useTheme()
	const { navigate } = useRouter()
	const svgColor = { color: Colors[theme].borderColor }

	if (!params) {
		navigate({ pathname: '/', params: {} })
		return <View></View>
	}

	const book = BOOKS.find((b: Book) => b.title === params?.bookId)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	const [isRunning, setIsRunning] = useState(true)
	const [currentWordIndex, setCurrentWordIndex] = useState(0)
	const [word, setWord] = useState('')
	const { speed, closeSettings } = useSettings() //0,1,2,3
	const speedToInterval = (speed_: number) => {
		switch (speed_) {
			case 0:
				return 2000 // 2 segundos
			case 1:
				return 1000 // 1 segundo
			case 2:
				return 500 // 0.5 segundo
			case 3:
				return 250 // 0.25 segundo
			default:
				return 1000 // padrão 1 segundo
		}
	}

	useEffect(() => {
		if (book && isRunning) {
			intervalRef.current = setInterval(() => {
				setCurrentWordIndex((prevIndex) => {
					const newIndex = (prevIndex + 1) % book.words.length
					setWord(book.words[newIndex])
					return newIndex
				})
			}, speedToInterval(speed))

			// Limpar o intervalo quando o componente for desmontado
			return () => clearInterval(intervalRef.current as NodeJS.Timeout)
		}
	}, [book, isRunning, speed])

	const start = () => {
		if (!isRunning) {
			setIsRunning(true)
		}
	}

	const pause = () => {
		if (isRunning) {
			clearInterval(intervalRef.current as NodeJS.Timeout)
			setIsRunning(false)
		}
	}

	return (
		<Container>
			<View
				style={styles.container}
				onTouchStart={(e) => {
					closeSettings()
				}}
			>
				<View
					style={{
						height: '70%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text style={[styles.word, { color: svgColor.color }]}>
						{word}
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={pause}>
						<TabBarIcon
							name='stop'
							size={40}
							color={svgColor.color}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={start}>
						<TabBarIcon
							name='play'
							size={40}
							color={svgColor.color}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 1,
		// backgroundColor: Colors.light.text,
		zIndex: -10,
		marginTop: '30%'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		padding: 10
	},
	title: {
		color: Colors.light.text,
		fontSize: 24,
		marginBottom: 20
	},
	word: {
		color: Colors.dark.background,
		fontSize: 34
	},
	btn: {
		width: 100
	}
})
