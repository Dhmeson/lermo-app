import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { TabBarIcon } from './navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import { StatusBar } from 'expo-status-bar'
import { useSettings } from '@/hooks/useSettings'
import { usePathname, useRouter } from 'expo-router'

export default function Header() {
	const { theme } = useTheme()
	const {  openSettings, closeSettings } = useSettings()
	const svgColor = { borderColor: Colors[theme].borderColor }
	const pathname=usePathname()
	const { navigate } = useRouter()
	function onPress(){
		closeSettings()
		if(pathname=='/'){
			return navigate('/add')
		}
		return navigate('/')

	}
	return (
		<View style={style.conteiner}>
			<StatusBar
				style={theme == 'light' ? 'light' : 'dark'}
				backgroundColor={Colors[theme].borderColor}
				translucent
			/>
			<TouchableOpacity
				style={[style.icon, svgColor]}
				onPress={() => {
					onPress()
				}}
			>
				<TabBarIcon
					name={pathname=='/'?'add':'arrow-back'}
					size={30}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={[style.icon, svgColor]}
				onPress={openSettings}
			>
				<TabBarIcon
					name='settings-outline'
					size={28}
				/>
			</TouchableOpacity>
		</View>
	)
}
const style = StyleSheet.create({
	conteiner: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 23,
		paddingTop: 60
	},
	icon: {
		borderWidth: 1,
		color: Colors.light.text,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		//padding: 5,
		width: 50,
		height: 50
	}
})
