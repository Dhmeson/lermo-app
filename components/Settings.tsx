import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { TabBarIcon } from './navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import { useSettings } from '@/hooks/useSettings'

export default function Settings() {
	const { theme, toggleTheme } = useTheme()
	const { changeSpeed, speed } = useSettings()
	return (
		<View style={style.modal}>
			<TouchableOpacity
				style={style.modalButtons}
				onPress={toggleTheme}
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
			<TouchableOpacity style={style.modalButtons}>
				<Text>Delete</Text>
				<TabBarIcon
					name='trash'
					size={24}
					color={Colors.light.icon}
				/>
			</TouchableOpacity>
		</View>
	)
}
const style = StyleSheet.create({
	modal: {
		position: 'absolute',
		right: 23,
		top: 130,
		width: '50%',
		// backgroundColor: Colors.dark.background,
		//minHeight: 200,
		gap: 10,
		zIndex: 100
	},
	modalButtons: {
		backgroundColor: Colors.light.background,
		borderWidth: 1,
		borderColor: Colors.dark.background,
		flexDirection: 'row',
		padding: 8,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10
	}
})
