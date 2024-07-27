import { Container } from '@/components/Conteiner'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useTheme } from '@/hooks/useTheme'
import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native'
import * as Clipboard from 'expo-clipboard';
export default function Index() {
	const { theme, toggleTheme } = useTheme()
    const style_ = { borderColor: Colors[theme].text ,color:Colors[theme].text }
    const [content, setContent] = useState('')  // Adicionando estado para o conteúdo do text area
    const onPaste = async () => {
        try {
            const clipboardContent = await Clipboard.getStringAsync(); // Obtendo o texto 
            setContent(clipboardContent)  // Atualizando o estado com o conteúdo do clipboard
        } catch (error) {
            console.error('Failed to paste content from clipboard', error)
        }
    }
	return (
		<Container>
			<View style={styles.container}>
                <View>
                    <Text style={[styles.text,style_]}>Titulo</Text>
                    <TextInput style={[styles.textInput,style_]} placeholder='Digite um titulo'>

                    </TextInput>
                </View>
                <View style={{flex:1,marginTop:10}}>
                    <View style={styles.copy}>
                        <Text style={[styles.text,style_]}>Conteudo</Text>
                        <TabBarIcon name='copy' onPress={onPaste}></TabBarIcon>

                    </View>
                    <TextInput 
                            value={content}  // Configurando o valor do TextInput com o estado
                            onChangeText={setContent} 
                            multiline style={[styles.textArea,style_]} placeholder='Digite um  conteudo'>

                    </TextInput>
                </View>
                
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
        height: '100%'
    },
    copy:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10
    }
    //... Other styles
})