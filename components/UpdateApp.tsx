import React, { useState } from 'react';
import { Modal, View, Text,  StyleSheet, TouchableOpacity } from 'react-native';
import { useUpdates } from '@/hooks/useUpdates';

export function UpdateApp() {
    const { isUpdateAvailable,downloadUpdate } = useUpdates();
    const [modalVisible, setModalVisible] = useState(isUpdateAvailable);

    const handleUpdate = () => {
      
        downloadUpdate()
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Atualização Disponível</Text>
                    <Text style={styles.modalMessage}>
                        Uma nova versão do aplicativo está disponível. Você gostaria de atualizar agora?
                    </Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                            <Text style={styles.buttonText}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                            <Text style={styles.buttonText}>Sim</Text>
                        </TouchableOpacity>
                      
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Semitransparente
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#a3df57', // Cor de fundo dos botões
        marginHorizontal: 10,
    },
    cancelButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#e1885b', // Cor de fundo dos botões
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        width:80,textAlign: 'center',
    },
});
