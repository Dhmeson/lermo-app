import { Book } from "@/app/class/Book";
import { useBooks } from "@/ctx/booksContext";
import { useEffect, useState } from "react";

export function useGetBook(id:string){
    const {books}=useBooks()
    const [book,setBook] =useState(books?books.find(book => book.id===id):null) 
    useEffect(()=>{
        setBook(books?books.find(book => book.id===id):null)  // Update book if it changes in the books array.  This is necessary when the book id changes.  If the book is not found in the books array, setBook to null.
    },[id])
    return {
        book: book as Book | undefined,
       
    }


}