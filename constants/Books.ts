const text =
	'Para adicionar conteúdo HTML ou texto adicional a um template de email no Sendinblue, você pode usar placeholders no seu template que serão substituídos pelos valores que você deseja enviar. Vou mostrar um exemplo de como você pode modificar o seu código para passar variáveis para o template:'

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
// Criando o novo objeto Book a partir do text
const newBook: Book = {
	title: text.slice(0, 30), // Usando os primeiros 30 caracteres como título, você pode ajustar conforme necessário
	totalPages: 200, // Arbitrariamente definido como 200, ajuste conforme necessário
	words: text.split(' ') // Separando as palavras pelo espaço
}

// Adicionando o novo objeto ao array BOOKS
BOOKS.push(newBook)
