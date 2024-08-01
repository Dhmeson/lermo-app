import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorageService } from '@/app/class/AsyncStorageService';
import { BookRepository } from '@/app/class/BookRepository';
import { Book } from '@/app/class/Book';
import { useRouter } from 'expo-router';

// Contexto e Tipagem
interface BookContextType {
    books: Book[];
    getBook: (id: string) => Promise<Book | undefined>;
    saveBook: (book: Book) => Promise<void>;
    editBook: (books: Book) => void;
    deleteBook: (id: string) => Promise<void>;
    getAllBooks: () => Promise<void>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBooks = (): BookContextType => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBooks must be used within a BookProvider');
    }
    return context;
};

// Provedor
export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const repository = new BookRepository(new AsyncStorageService());

    const getBook = async (id: string): Promise<Book | undefined> => {
        try {
            return await repository.getBook(id);
        } catch (error) {
            console.error('Error fetching book', error);
            return undefined;
        }
    };

    const saveBook = async (book: Book): Promise<void> => {
        try {
            await repository.saveBook(book);
            await getAllBooks(); // Refresh list
        } catch (error) {
            console.error('Error saving book', error,book);
        }
    };

    const deleteBook = async (id: string): Promise<void> => {
        try {
            const bookList = await repository.getAllBooks();
            const books_=bookList.filter(b =>{
                if(b.id!==id) return b
                
            })
            await repository.updateBook(books_)
            setBooks(books_)
            

           
        } catch (error) {
            console.error('Error fetching all books', error);
        }
    };

    const getAllBooks = async (): Promise<void> => {
        try {
            const bookList = await repository.getAllBooks();
            setBooks(bookList??[]);
        } catch (error) {
            console.error('Error fetching all books', error);
        }
    };
    const editBook = async (book:Book):Promise<void> => {
        try {
            const bookList = await repository.getAllBooks();
            const booksEdited=bookList.map(b =>{
                if(b.id===book.id) return book
                return b
               
            })
            await repository.updateBook(booksEdited)
            setBooks(booksEdited)


           
        } catch (error) {
            console.error('Error fetching all books', error);
        }
    };
    
    useEffect(() => {
        getAllBooks(); // Initial fetch
    }, []);

    return (
        <BookContext.Provider value={{ books, getBook, saveBook, deleteBook, getAllBooks,editBook, }}>
            {children}
        </BookContext.Provider>
    );
};
