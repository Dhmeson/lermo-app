export  class Book{
    id: string;
    title: string;
    content: string[];
    constructor( id:string,  title: string,  content: string){
        this.title = title;
        this.content = this.generateWords(content)
        this.id = id;
    }
    private generateWords(text:string){
        // return text.split(' ')
           // Remove quebras de linha e espaços extras antes de dividir em palavras
           const cleanedText = text
           .replace(/\s+/g, ' ')  // Substitui múltiplos espaços e quebras de linha por um único espaço
           .trim();               // Remove espaços no início e no fim
       return cleanedText.split(' ');  // Divide o texto limpo em palavras
    }
}