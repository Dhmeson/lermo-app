import React, { useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, AlertButton, AlertOptions } from 'react-native'
import { TabBarIcon } from './navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import { useSettings } from '@/hooks/useSettings'
import {  usePathname, useRouter } from 'expo-router'
import { useRoute } from '@react-navigation/native'
import { BookRouteProp } from '@/types/routers'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { useFont } from '@/ctx/fontsContext'
import { useGetBook } from '@/hooks/useGetBook'
import { CustomModal } from './CustomModal'
import { useBooks } from '@/ctx/booksContext'

export default function SettingsModal() {
	const {  toggleTheme } = useTheme()
	
	const { changeSpeed, speed ,closeSettings} = useSettings()
	const path=usePathname()
	const { navigate } = useRouter()
	const {params} = useRoute<BookRouteProp>()
	const {book}=useGetBook(params?.bookId??'')
	const {changeFontSize,getFontDescription}=useFont()
	const {deleteBook}=useBooks()
	const [isOpenDeleteModal,setIsOpenDeleteModal]=useState(false)

	function removeBook(){
		deleteBook(params?.bookId??'')
		closeSettings()
		navigate('/')
	}
	
	return (
		<View style={style.modal}>
			<CustomModal onClose={()=>setIsOpenDeleteModal(false)} visible={isOpenDeleteModal} onConfirm={()=>removeBook()} text='Deseja apagar text?'/>
			<TouchableOpacity
				style={style.modalButtons}
				onPress={()=>toggleTheme()}
			>
				<Text>Dark mode</Text>
				<TabBarIcon
					name='moon'
					size={24}
					color={Colors.light.icon}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={style.modalButtons}
				onPress={changeSpeed}
			>
				<Text>Speed {speed == 0 ? '' : `${speed + 'x'}`}</Text>
				<TabBarIcon
					name='speedometer'
					size={24}
					color={Colors.light.icon}
				/>
			</TouchableOpacity>
			

		{
			path=='/book' || path=='/edit' && <>
			<TouchableOpacity
				style={style.modalButtons}
				onPress={()=>changeFontSize(book?.content??[])}
			>
				<Text>Font {getFontDescription()}</Text>
				<TabBarIcon
					name='text'
					size={24}
					color={Colors.light.icon}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={style.modalButtons} onPress={()=>{
				closeSettings()
				navigate({ pathname: '/edit', params: {bookId:params.bookId} })
			}}>
				<Text>Editar</Text>
				<TabBarIcon
					name='pencil-outline'
					size={24}
					color={Colors.light.icon}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={style.modalButtons} onPress={()=>{setIsOpenDeleteModal(true)}}>
				<Text>Delete</Text>
				<TabBarIcon
					name='trash'
					size={24}
					color={Colors.light.icon}
				/>
			</TouchableOpacity></>
		}
		{
			 path!='/book' && 	
			<TouchableOpacity style={style.modalButtons} onPress={()=>{setIsOpenDeleteModal(true)}}>
			<Text>Creditos</Text>
			<TabBarIcon
				name='information-circle'
				size={24}
				color={Colors.light.icon}
			/>
		</TouchableOpacity>
		}
			
		</View>
	)
}
const style = StyleSheet.create({
	modal: {
		width: '100%',
		gap: responsiveScreenHeight(2),
		zIndex: 100,minHeight:responsiveScreenHeight(30)
	},
	modalButtons: {
		backgroundColor: Colors.light.background,
		borderWidth: 1,
		borderColor: Colors.dark.background,
		flexDirection: 'row',
		padding: responsiveScreenHeight(1),
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10,
		maxHeight:responsiveScreenHeight(6),
		
	}
})
