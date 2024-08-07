import { Container } from '@/components/Conteiner'
import DeveloperInfo from '@/components/DeveloperInfo'
import RecentsBook from '@/components/RecentsBook'
import { UpdateApp } from '@/components/UpdateApp'

import React from 'react'

export default function Index() {
	return (
		<Container>
			<UpdateApp/>
			<RecentsBook />
			<DeveloperInfo/>
		</Container>
	)
}
