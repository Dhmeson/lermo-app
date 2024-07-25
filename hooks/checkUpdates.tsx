import * as Updates from 'expo-updates';
import { Alert } from 'react-native';
export const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        // Se uma atualização estiver disponível, faça o download e aplique
        await Updates.fetchUpdateAsync();
        Alert.alert('Atualização encontrada', 'Uma nova atualização está disponível e será aplicada na próxima vez que o aplicativo for iniciado.');
      }
    } catch (e) {
      console.error(e);
    }
  };