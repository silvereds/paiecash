import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect, useState} from "react";

export default function useAsyncStorage(key) {
    const [data, setData] = useState(null);

    useEffect(() => {
        getStorageValue();
    }, [key]);

    async function getStorageValue() {
        let value = null;
        try {
            value = (await AsyncStorage.getItem(key));
        } catch (e) {
            console.log(e)
        } finally {
            setData(value);
        }
    }

    async function updateStorage(newValue) {
        try {
            await AsyncStorage.setItem(key, newValue);
        } catch (e) {
            // handle here
        } finally {
            getStorageValue();
        }
    }

    async function removeStorage() {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            // handle here
        }
    }

    return {data, updateStorage, removeStorage};
}
