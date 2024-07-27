import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storage } from '../interface/Storage';


export class AsyncStorageService implements Storage {
   
    async save(key: string, value: any): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving data', error);
        }
    }

    async get(key: string): Promise<any> {
        try {
            const value = await AsyncStorage.getItem(key);
            return value != null ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error getting data', error);
            return null;
        }
    }

    async remove(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data', error);
        }
    }

    async update(key: string, value: any): Promise<void> {
        try {
            await this.save(key, value); // Updating is essentially the same as saving
        } catch (error) {
            console.error('Error updating data', error);
        }
    }
}
