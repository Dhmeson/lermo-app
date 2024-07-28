import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Localization from 'expo-localization';
import languages from './languages.json'; // Assumindo que seu arquivo JSON está no mesmo diretório

// Definindo o tipo para os textos
interface LanguageTexts {
  welcome: string;
  greeting: string;
}

// Definindo o tipo para o JSON de idiomas
interface Languages {
  en: LanguageTexts;
  pt: LanguageTexts;
  [key: string]: LanguageTexts; // Para permitir outros idiomas dinamicamente
}

const useLanguage: React.FC = () => {
  const [language, setLanguage] = useState<LanguageTexts>(languages.en);

  useEffect(() => {
    const deviceLanguage = Localization.locale.split('-')[0]; // Pegando a parte do idioma da localidade (ex: 'en' de 'en-US')
    setLanguage((languages as Languages)[deviceLanguage] || languages.en); // Define o idioma ou fallback para inglês
  }, []);

  return{
    language
  }
};

export default App;
