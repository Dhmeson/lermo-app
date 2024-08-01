import { Book } from "../class/Book";

export interface Storage{
    save(key: string,value:any): Promise<void>;
    get(key: string): Promise<Book>;
    remove(key: string): Promise<void>;
    update(key: string,value:any): Promise<void>;
    getAll(key: string): Promise<Book[]>;

}