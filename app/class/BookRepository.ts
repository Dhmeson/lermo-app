import { Book } from "./Book";
import { Storage } from "../interface/Storage";
export class BookRepository {
    constructor(readonly storage:Storage){
        this.storage = storage;
    }
    async getBook(id:string): Promise<Book>{
        const book= await this.storage.get(id)
        if(book)return book
         throw new Error("Book not found");  
        
    }
    async saveBook(book:Book): Promise<void>{
        const allBooks=await this.getAllBooks()
       await this.storage.save("Books", [...allBooks,book]);
    

    }
    async updateBook(books:Book[]): Promise<void>{
        await this.storage.save("Books", books);


    }
    async deleteBook(id:string): Promise<void>{
        this.storage.remove(id);
    }
    async getAllBooks(): Promise<Book[]>{
        return  await  this.storage.getAll("Books")
      
        // return Object.values(this.storage).map(book=>JSON.parse(book) as Book);
    }
}