import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import{responsiveScreenWidth} from 'react-native-responsive-dimensions'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TabBarIcon } from './navigation/TabBarIcon'
import { useRouter } from 'expo-router'
import { Book } from '@/app/class/Book'
import { RemoveBook } from './RemoveBook'
interface Props {
	type?: 'create' | 'view'
	data?: Book | null
}
export default function Card({ type = 'view', data = null }: Props) {
	const { theme } = useTheme()
	const { navigate } = useRouter()
	const textColor = { color: Colors[theme].text }
	function onPress(){
		if(type === 'view')return navigate({ pathname: 'book', params: { bookId: data?.id } })
		navigate({ pathname: 'add'})
	}
	return (
		<TouchableOpacity
			onPress={onPress }
			style={[styles.c, { borderColor: Colors[theme].borderColor }]}
		>
			{type == 'view' ? (
				<View style={{flexDirection:'column',justifyContent:'space-between',flex:1,zIndex:100}}>
					<Text style={[styles.text, textColor]}>
						{data && data.title}
					</Text>
					<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignSelf:'flex-end'}}>
					<TabBarIcon
					 onPress={()=>navigate({ pathname: '/edit',params: { bookId: data?.id }})}
						name='pencil'
						size={30}
					/>
					<RemoveBook bookId={data?.id??""}/>
					</View>

				
				</View>
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
		//minWidth: 120,
		height: 100,
		padding: 10,
		flexGrow: 1,
		
		maxWidth:responsiveScreenWidth(90),
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
