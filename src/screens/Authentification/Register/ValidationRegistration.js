import React, {useEffect, useState} from 'react';
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";
import {ScrollView, StyleSheet, View} from "react-native";
import {theme} from "../../../core/theme";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import DatePickerComponents from "../../../components/DatePicker/DatePicker";
import Toast from "react-native-toast-message";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ValidationRegistration({emailRegister, navigation}) {
    const {loading, data, error, status, postData} = useFetchApi(APPENV.domain + '/registration/complete/info')
    const [firstName, setFirstName] = useState({value: '', error: ''})
    const [lastName, setLastName] = useState({value: '', error: ''})
    const [code, setCode] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''})
    const [date, setDate] = useState('')

    useEffect(() => {
        if (status < 300 && status >= 100) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Dashboard'}],
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
                text1: 'Erreur de connexion',
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
        postData({
            "email": emailRegister,
            "firstName": firstName.value,
            "lastName": lastName.value,
            "birthday": date,
            "confirmPassword": confirmPassword.value,
            "password": password.value,
            "code": code.value
        })
    }

    return (
        <ScrollView style={{flex: 1, width: '100%', marginTop: 20}}>
            <View style={{
                width: '100%',
                flex: 1,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Header>Completer les informations de votre compte</Header>
                <TextInput
                    label="Code de confirmation"
                    returnKeyType="next"
                    value={code.value}
                    onChangeText={(text) => setCode({value: text, error: ''})}
                    error={!!code.error}
                    errorText={code.error}
                />
                <TextInput
                    label="Nom(s)"
                    returnKeyType="next"
                    value={firstName.value}
                    onChangeText={(text) => setFirstName({value: text, error: ''})}
                    error={!!firstName.error}
                    errorText={firstName.error}
                />
                <TextInput
                    label="Prenom(s)"
                    returnKeyType="next"
                    value={lastName.value}
                    onChangeText={(text) => setLastName({value: text, error: ''})}
                    error={!!lastName.error}
                    errorText={lastName.error}
                />
                <DatePickerComponents date={date} setDate={setDate}/>
                <TextInput
                    label="Mot de passe"
                    returnKeyType="next"
                    value={password.value}
                    onChangeText={(text) => setPassword({value: text, error: ''})}
                    error={!!password.error}
                    errorText={password.error}
                />
                <TextInput
                    label="confirmer votre mot de passe"
                    returnKeyType="next"
                    value={confirmPassword.value}
                    onChangeText={(text) => setConfirmPassword({value: text, error: ''})}
                    error={!!confirmPassword.error}
                    errorText={confirmPassword.error}
                />
                <Button
                    mode="contained"
                    disabled={loading}
                    onPress={onSignUpPressed}
                    style={{marginTop: 24}}
                >
                    {loading ? 'Chargement...' : 'Valider'}
                </Button>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    }
})