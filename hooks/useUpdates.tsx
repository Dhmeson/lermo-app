import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { Alert } from 'react-native';

  export function useUpdates(){

    const {
      currentlyRunning,
      isUpdateAvailable,
      isUpdatePending
    } = Updates.useUpdates();
 // Show whether or not we are running embedded code or an update
 const runTypeMessage = currentlyRunning.isEmbeddedLaunch
 ? 'This app is running from built-in code'
 : 'This app is running an update';
    const checkForUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          // Se uma atualização estiver disponível, faça o download e aplique
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
          Alert.alert('Atualização encontrada', 'Uma nova atualização está disponível e será aplicada na próxima vez que o aplicativo for iniciado.');
        }
      } catch (e) {
        console.error(e);
      }
    };
    function downloadUpdate(){
      Updates.fetchUpdateAsync()
    }

    useEffect(() => {
      if (isUpdatePending) {
        // Update has successfully downloaded; apply it now
        Updates.reloadAsync();
      }
    }, [isUpdatePending]);

    return {
      isUpdateAvailable,checkForUpdates,downloadUpdate
    }
  }