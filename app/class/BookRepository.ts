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
        this.storage.save(book.id, book);
    }
    async deleteBook(id:string): Promise<void>{
        this.storage.remove(id);
    }
    async getAllBooks(): Promise<Book[]>{
        return Object.values(this.storage).map(book=>JSON.parse(book) as Book);
    }
}