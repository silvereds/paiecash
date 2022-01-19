import React, {useEffect, useState} from 'react';
import styles from "../Login/LoginStyle";
import {Text} from "react-native-paper";
import {View} from "react-native";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import {emailValidator} from "../../../helpers/validators/emailValidator";
import Toast from "react-native-toast-message";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function RequestPassword({setEmail: setUserMail, setStep}) {
    const {loading, data, error, status, postData} = useFetchApi(APPENV.domain
        + '/api/profile/account/recover')
    const [email, setEmail] = useState({value: '', error: ''})

    useEffect(() => {
        if (status < 300 && status >= 100) {
            setUserMail(email)
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: data.message
            });
            setStep(true)
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
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({...email, error: emailError})
            return
        }

        console.log({
            "email": email,
            "api_key": APPENV.apiKey,
            "confirmation_mode": true
        })
        postData({
            "email": email.value,
            "api_key": APPENV.apiKey,
            "confirmation_mode": true
        })
    }

    return (
        <View style={styles.bodyContent}>
            <Text style={styles.largeText}>Recuperer votre compte</Text>
            <View style={styles.inputRow}>
                <TextInput
                    label="Email de votre compte"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({value: text, error: ''})}
                    error={!!email.error}
                    errorText={email.error}
                    keyboardType="email-address"
                />
            </View>
            <Button mode="contained" disabled={loading === true} onPress={() => sendResetPasswordEmail()}>
                {loading === true ? 'Chargement...' : 'VALIDER'}
            </Button>
        </View>
    );
}
