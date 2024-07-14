import React from 'react'
import { View, Text } from 'react-native'
import { Link, router, useRouter } from 'expo-router'
import { useRoute } from '@react-navigation/native'

export default function book() {
	const { params, path } = useRoute()
	console.log(params, path)
	return (
		<View>
			<Text>{path}</Text>
		</View>
	)
}
