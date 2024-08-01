import { FontManager } from '@/app/class/FontManager';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

// Tipo de contexto
interface FontContextType {
    fontSize: number;
    fontIndex: number;
    getFontDescription:() => string;
    changeFontSize:(content: string[])=>void;
        
    
}

// Contexto
const FontContext = createContext<FontContextType | undefined>(undefined);

// Hook para usar o contexto
export const useFont = (): FontContextType => {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error('useFont must be used within a FontProvider');
    }
    return context;
};

// Provedor
export const FontProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [fontSize, setFontSize] = useState(responsiveFontSize(5.2)); // Font size default
    const [fontIndex, setfontIndex] = useState(0); // Font name default

    function changeFontSize(content: string[]){
        const fontOptions=FontManager.getOptionsFont(content)
         // Atualize o índice cíclicamente
         setfontIndex(prevIndex => {
            const nextIndex = (prevIndex + 1) % fontOptions.length;
            return nextIndex;
        });

    }
    function getFontDescription(){
        return FontManager.getFontDescription(fontIndex);
    }
    useEffect(()=>{
        setFontSize(FontManager.getFontSizeValue(fontIndex))
    },[fontIndex])

    return (
        <FontContext.Provider value={{ fontSize ,fontIndex,getFontDescription,changeFontSize}}>
            {children}
        </FontContext.Provider>
    );
};
