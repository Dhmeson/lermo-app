import { useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import languages from '../languages.json'; // Assumindo que seu arquivo JSON está no mesmo diretório

// Definindo o tipo para os textos
interface LanguageTexts {
 
  Recentes: string,
  Cancelar: string,
  Confirmar: string,
  Titulo: string,
  Digite_um_titulo: string,
  Editar: string,
  Editado_com_sucesso: string,
  Salvar: string,
  Digite_um_conteudo: string,
  Adicionar: string,
  Conteudo: string,
  Excluir: string,
  Deseja_remover:string,
  Velocidade: string,
  Fonte: string
}


type LanguageType = "en"| "pt"| "de"| "it"| "es"|"fr"|"js"
const lenguagesAcepts=["en", "pt", "de", "it", "es","fr","js"]
export function useLanguage(){
  const [language, setLanguage] = useState<LanguageTexts>(languages.pt);

  useEffect(() => {
    console.log(Localization.getLocales()[0].languageCode)
    if(lenguagesAcepts.includes(Localization.getLocales()[0].languageCode??"pt")){
      const deviceLanguage:LanguageType = (Localization.getLocales()[0].languageCode??'pt') as LanguageType
      console.log(deviceLanguage)
      //@ts-ignore
      setLanguage(languages[deviceLanguage] as LanguageTexts)
    }
    

  }, []);

  return{
    language
  }
};


