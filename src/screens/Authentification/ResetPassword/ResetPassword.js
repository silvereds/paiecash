import React, {useEffect, useState} from 'react';
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import {View} from "react-native";
import styles from "../Login/LoginStyle";
import {Text} from "react-native-paper";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import {passwordValidator} from "../../../helpers/validators/passwordValidator";
import Toast from "react-native-toast-message";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ResetPassword({navigation, email}) {
    const {loading, data, error, status, postData} = useFetchApi(APPENV.domain
        + '/api/profile/account/reset')
    const [code, setCode] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [passwordConfirm, setPasswordConfirm] = useState({value: '', error: ''})

    useEffect(() => {
        if (status < 300 && status >= 100) {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: data.message
            });
            navigation.navigate('LoginScreen')
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


    const sendResetPasswordEmail = () => {
        const passwordError = passwordValidator(password.value)
        const passwordConfirmError = passwordValidator(passwordConfirm.value)
        if (passwordError || passwordConfirmError) {
            setPassword({...password, error: passwordError})
            setPasswordConfirm({...passwordConfirm, error: passwordConfirmError})
            return
        }
        postData({
            "email": email.value,
            "confirmation_code": code.value,
            "password": password.value,
            "password_confirm": passwordConfirm.value,
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
                />
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    label="Mot de passe"
                    returnKeyType="done"
                    value={password.value}
                    ifEye={true}
                    onChangeText={(text) => setPassword({value: text, error: ''})}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    label="Confirmez votre mot de passe"
                    returnKeyType="done"
                    ifEye={true}
                    value={passwordConfirm.value}
                    onChangeText={(text) => setPasswordConfirm({value: text, error: ''})}
                    error={!!passwordConfirm.error}
                    errorText={passwordConfirm.error}
                    secureTextEntry
                />
            </View>
            <Button mode="contained" disabled={loading === true} onPress={() => sendResetPasswordEmail()}>
                {loading === true ? 'Chargement...' : 'VALIDER'}
            </Button>
        </View>
    );
}
