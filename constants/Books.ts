export type Book = {
	title: string
	totalPages: number
	words: string[]
}
export const BOOKS: Book[] = [
	{
		title: 'livro',
		totalPages: 100,
		words: [
			'No',
			'princípio',
			'Deus',
			'criou',
			'os',
			'céus',
			'e,',
			'a',
			'terra'
		]
	},
	{
		title: 'biblia',
		totalPages: 100,
		words: ['Palavra1', 'palavra2', 'outras']
	}
]
