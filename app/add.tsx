import { Container } from '@/components/Conteiner'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import * as Clipboard from 'expo-clipboard';
import { AsyncStorageService } from './class/AsyncStorageService'
import { BookRepository } from './class/BookRepository'
import { Book } from './class/Book'
import { useRouter } from 'expo-router'
import { GenerateId } from './class/GenerateId'
import { useBooks } from '@/ctx/booksContext'
import { useSettings } from '@/hooks/useSettings'
import useKeyboardOpen from '@/hooks/usekeyboard'
import { useLanguage } from '@/hooks/useLanguage'
export default function Index() {
    const {language}=useLanguage()

	const { theme } = useTheme()
    const {closeSettings}=useSettings()
    const style_ = { borderColor: Colors[theme].text ,color:Colors[theme].text }
    const [content, setContent] = useState('')  
    const [title, setTitle] = useState('') 
    const { navigate } = useRouter()
    const {saveBook}=useBooks()


    const onPaste = async () => {
        try {
            const clipboardContent = await Clipboard.getStringAsync(); // Obtendo o texto 
            setContent(clipboardContent)  // Atualizando o estado com o conteúdo do clipboard
        } catch (error) {
        }
    }
    const save = async () => {
        if(title && content && content.length){
            const book = new Book(GenerateId.getId(),title,content)
            await saveBook(book)
            setContent('')
            navigate({ pathname: '/' })
        }
       
    }
    useKeyboardOpen(closeSettings)
	return (
		<Container>
			<View style={styles.container} onPointerDown={()=>closeSettings()} >
                <View>
                    <Text style={[styles.text,style_]}>{language.Titulo}</Text>
                    <TextInput onFocus={()=>closeSettings()} style={[styles.textInput,style_]} placeholder={language.Digite_um_titulo} onChangeText={(t)=>{setTitle(t)}}/>
                </View>
                <View style={{flex:1,marginTop:10}}>
                    <View style={styles.copy}>
                        <Text style={[styles.text,style_]}>{language.Conteudo}</Text>
                        <TabBarIcon name='copy' onPress={onPaste}/>

                    </View>
                    <TextInput
                            
                            onFocus={()=>closeSettings()}
                            value={content}  // Configurando o valor do TextInput com o estado
                            onChangeText={(t)=>{setContent(t)}}
                            multiline
                            
                            style={[styles.textArea,style_]} placeholder={language.Digite_um_conteudo}>

                    </TextInput>
                </View>
                <TouchableOpacity onPress={save} style={[styles.btn]}>
                    <Text style={[styles.text,style_]}>{language.Salvar}</Text>
                </TouchableOpacity>
                
            </View>
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
        textAlignVertical:'top',
        
        flexWrap:'wrap'
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