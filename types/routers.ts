import { RouteProp } from '@react-navigation/native'

type BookRouteParams = {
	bookId: string
}

type RootStackParamList = {
	Book: BookRouteParams
}

// Tipagem do useRoute
export type BookRouteProp = RouteProp<RootStackParamList, 'Book'>