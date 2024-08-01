import { Container } from '@/components/Conteiner'
import RecentsBook from '@/components/RecentsBook'
import { UpdateApp } from '@/components/UpdateApp'

import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Index() {
	return (
		<Container>
			<UpdateApp/>
			<RecentsBook />
		</Container>
	)
}
