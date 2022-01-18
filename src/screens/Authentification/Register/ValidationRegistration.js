import React, {useEffect, useState} from 'react';
import TextInput from "../../../components/TextInput";
import {View} from "react-native";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import Toast from "react-native-toast-message";
import styles from "../Login/LoginStyle";
import {Text} from "react-native-paper";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ValidationRegistration({userData, navigation}) {
    const {loading, data, error, status, postData} = useFetchApi(APPENV.domain
        + '/api/authentification/registration/activation')
    const [code, setCode] = useState({value: '', error: ''})

    useEffect(() => {
        if (status < 300 && status >= 100) {
            navigation.reset({
                index: 0,
                routes: [{name: 'LoginScreen'}],
            })
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: data.message
            });
        }

        if (status >= 400 && status < 500) {
            Toast.show({
                type: 'error',
                text1: 'Erreur',
                text2: error.message
            });
        }

        if (status >= 500) {
            Toast.show({
                type: 'error',
                text1: error.title,
                text2: error.detail
            });
        }
    }, [data, error]);

    const onSignUpPressed = () => {
        console.log({
            "email": userData.email,
            "code": code.value,
            "api_key": APPENV.apiKey
        })
        postData({
            "email": userData.email,
            "code": code.value,
            "api_key": APPENV.apiKey
        })
    }

    return (
        <View style={styles.bodyContent}>
            <Text style={styles.largeText}>Entrez votre code confirmation</Text>
            <View style={styles.inputRow}>
                <TextInput
                    label="Code de confirmation"
                    returnKeyType="next"
                    value={code.value}
                    onChangeText={(text) => setCode({value: text, error: ''})}
                    error={!!code.error}
                    errorText={code.error}
                    keyboardType="email-address"
                />
            </View>
            <Button mode="contained" disabled={loading === true} onPress={() => onSignUpPressed()}>
                {loading === true ? 'Chargement...' : 'VALIDER'}
            </Button>
        </View>
    );
}

