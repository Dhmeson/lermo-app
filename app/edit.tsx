import { Container } from '@/components/Conteiner'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { useEffect, useState } from 'react'
import { View, Text,TextInput,StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import * as Clipboard from 'expo-clipboard';

import { Book } from './class/Book'
import {  useRoute } from '@react-navigation/native'
import { useBooks } from '@/ctx/booksContext'
import { useSettings } from '@/hooks/useSettings'
import { BookRouteProp } from '@/types/routers'
import { ActionResultModal } from '@/components/ActionResultModal'
import useKeyboardOpen from '@/hooks/usekeyboard'
export default function Edit() {
   
	const { theme } = useTheme()
    const {closeSettings}=useSettings()
    const {books,editBook}=useBooks()

    const style_ = { borderColor: Colors[theme].text ,color:Colors[theme].text }
    const [content, setContent] = useState('')  
    const [title, setTitle] = useState('') 
    const [sucessModal, setSucessModal] = useState(false)
  
    
    const {params} = useRoute<BookRouteProp>()


    const book = books.find(book => book.id===params.bookId)
    useEffect(()=>{
        if(book){
            setTitle(book.title)
            const content = book.content.reduce((prev, currentValue) => prev +" " +currentValue, '');
            setContent(content)
        }
        
     
    },[])



    const onPaste = async () => {
        try {
            const clipboardContent = await Clipboard.getStringAsync(); // Obtendo o texto 
            setContent(clipboardContent)  // Atualizando o estado com o conteúdo do clipboard
        } catch (error) {
        }
    }
   
    const edit = async () => {
        if(title && content && content.length){
            const book_ = new Book(book?.id??"",title,content)
            editBook(book_)
            setSucessModal(true)
        }
       
    }
    useKeyboardOpen(closeSettings)

	return (
		<Container>
			<View style={styles.container} onPointerDown={()=>closeSettings()}>
                <View>
                    <Text style={[styles.text,style_]}>Titulo</Text>
                    <TextInput value={title} onFocus={()=>closeSettings()} style={[styles.textInput,style_]} placeholder='Digite um titulo' onChangeText={(t)=>{setTitle(t)}}/>
                </View>
                <View style={{flex:1,marginTop:10}}>
                    <View style={styles.copy}>
                        <Text style={[styles.text,style_]}>Conteudo</Text>
                        <TabBarIcon name='copy' onPress={onPaste}/>

                    </View>
                    <TextInput 
                            onFocus={()=>closeSettings()}
                            value={content}  // Configurando o valor do TextInput com o estado
                            onChangeText={(t)=>{setContent(t)}}
                            multiline style={[styles.textArea,style_]} placeholder='Digite um  conteudo'>

                    </TextInput>
                </View>
                <TouchableOpacity onPress={edit} style={[styles.btn]}>
                    <Text style={[styles.text,style_]}>Editar</Text>
                </TouchableOpacity>
                
            </View>
            <ActionResultModal onClose={()=>setSucessModal(false)} text='Editado com sucesso!' visible={sucessModal}/>
		</Container>
	)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: Colors.dark.background,
        paddingHorizontal: 20,
        paddingVertical: 10,
        zIndex: -10
    },
    text: {
        fontSize: 20,
        color: Colors.light.text
    },
    textInput: {
        borderColor: Colors.light.text,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10
    },
    textArea: {
        borderColor: Colors.light.text,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        height: '90%',
        textAlignVertical:'top'
    },
    copy:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    btn:{
        backgroundColor:"#c2e184",
        padding:10,
        borderRadius:5,
        marginTop:10,
        marginBottom:10,alignItems: 'center',
        
    }
    //... Other styles
})