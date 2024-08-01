import { useFont } from '@/ctx/fontsContext'
import { useStyles } from '@/hooks/useStyles'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface WordDisplayProps {
    word: string
   
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word}) => {
    const {styles : s}=useStyles()
    const {fontSize}=useFont()


    return (
        <View style={styles.container}>
            <Text style={[styles.word, { color:s.color, fontSize }]}>
                {word}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    word: {
        fontSize: 24
    }
})

export default WordDisplay
