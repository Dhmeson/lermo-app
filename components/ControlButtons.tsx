import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { useStyles } from '@/hooks/useStyles'

interface ControlButtonsProps {
    onPlay: () => void
    onPause: () => void
    isRunning: boolean
    nextWord:() => void
    prevWord:() => void
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ onPlay, onPause,isRunning ,nextWord,prevWord}) => {
    const {styles : s}=useStyles()
    return (
        <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={prevWord}>
                <TabBarIcon name='arrow-back' size={40} color={s.color} />
            </TouchableOpacity>
            {
                isRunning ?  <TouchableOpacity onPress={onPause}>
                <TabBarIcon name='stop' size={40} color={s.color} />
            </TouchableOpacity>:    <TouchableOpacity onPress={onPlay}>
                <TabBarIcon name='play' size={40} color={s.color} />
            </TouchableOpacity>
            }
          
            <TouchableOpacity onPress={nextWord}>
                <TabBarIcon name='arrow-forward' size={40} color={s.color} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
})

export default ControlButtons
