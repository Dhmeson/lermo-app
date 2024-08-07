import { useState } from "react";
import { CustomModal } from "./CustomModal";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { useBooks } from "@/ctx/booksContext";
import { useLanguage } from "@/hooks/useLanguage";

interface Props{
    bookId:string;
}
export function RemoveBook({bookId}:Props){
    const {language}=useLanguage()
    const [isOpenModal,setIsOpenModal] =useState(false);
    const {deleteBook}=useBooks()
    const handleRemoveBook = () => {
        deleteBook(bookId)
        setIsOpenModal(false)
    }
    return  <>
        <TabBarIcon name='trash'size={30} onPress={()=>setIsOpenModal(true)}/>
        <CustomModal visible={isOpenModal} onClose={()=>setIsOpenModal(false)} onConfirm={handleRemoveBook} text={language.Deseja_remover}/>
    </>
}