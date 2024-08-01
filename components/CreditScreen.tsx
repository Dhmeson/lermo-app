import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Container } from '@/components/Conteiner'; // Ajuste o caminho conforme necessário
import { Colors } from '@/constants/Colors'; // Ajuste o caminho conforme necessário

const CreditsScreen: React.FC = () => {
    return (
        <Container>
            <View style={styles.container}>
                <Text style={styles.title}>Créditos</Text>
                
                <View style={styles.section}>
                    <Text style={styles.header}>Idealizador</Text>
                    <Text style={styles.text}>Nome do Idealizador</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>Desenvolvedor</Text>
                    <Text style={styles.text}>Nome do Desenvolvedor</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>Informações de Contato</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:desenvolvedor@exemplo.com')}>
                        <Text style={styles.link}>Email: desenvolvedor@exemplo.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('tel:+1234567890')}>
                        <Text style={styles.link}>Telefone: +123 456 7890</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.light.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.dark.text,
    },
    section: {
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.dark.text,
    },
    text: {
        fontSize: 16,
        color: Colors.dark.text,
    },
    link: {
        fontSize: 16,
        color: Colors.light.text,
        textDecorationLine: 'underline',
    },
});

export default CreditsScreen;
