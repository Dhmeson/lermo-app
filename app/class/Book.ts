export  class Book{
    id: string;
    title: string;
    content: string;
    constructor( id:string,  title: string,  content: string){
        this.title = title;
        this.content = content;
        this.id = id;
    }
}