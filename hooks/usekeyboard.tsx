import { useEffect } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

/**
 * Hook que executa uma função sempre que o teclado é aberto.
 *
 * @param onKeyboardOpen Função a ser chamada quando o teclado é aberto.
 */
const useKeyboardOpen = (onKeyboardOpen: () => void) => {
    useEffect(() => {
        // Função chamada quando o teclado é mostrado
        const keyboardDidShowListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            onKeyboardOpen
        );

        // Limpar o listener quando o componente for desmontado
        return () => {
            keyboardDidShowListener.remove();
        };
    }, [onKeyboardOpen]);
};

export default useKeyboardOpen;
