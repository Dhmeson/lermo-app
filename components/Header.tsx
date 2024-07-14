import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { TabBarIcon } from './navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import Settings from './Settings'

export default function Header() {
	const { theme } = useTheme()
	const [isOpenSettings, setIsOpenSettings] = useState(false)
	const svgColor = { borderColor: Colors[theme].borderColor }
	return (
		<View style={style.conteiner}>
			<TouchableOpacity style={[style.icon, svgColor]}>
				<TabBarIcon
					name='add'
					size={30}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={[style.icon, svgColor]}
				onPress={() => setIsOpenSettings(!isOpenSettings)}
			>
				<TabBarIcon
					name='settings-outline'
					size={28}
				/>
			</TouchableOpacity>
			{isOpenSettings && <Settings />}
		</View>
	)
}
const style = StyleSheet.create({
	conteiner: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 23,
		paddingTop: 33
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
