import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const CustomModal: React.FC<{ visible: boolean, onClose: () => void ,onConfirm: () => void,text:string, }> = ({ visible, onClose ,onConfirm,text}) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
            
        >
            <View style={styles.modalOverlay} >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{text}</Text>
                   
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            onConfirm()
                            onClose(); 
                            
                        }}>
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    modalContainer: {
        width: '80%',
        height:150,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent:'space-around'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalMessage: {
        marginVertical: 10,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    cancelButton: {
        padding: 10,
        backgroundColor: '#e1885b',
        borderRadius: 5,
        marginHorizontal: 10,
        width:100
    },
    button: {
        padding: 10,
        backgroundColor: '#a3df57',
        borderRadius: 5,
        marginHorizontal: 10,
        width:100
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

