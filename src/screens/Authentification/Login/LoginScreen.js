import React, {useContext, useEffect, useState} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Text} from 'react-native-paper'
import Background from '../../../components/Background'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import BackButton from '../../../components/BackButton'
import {theme} from '../../../core/theme'
import {emailValidator} from '../../../helpers/validators/emailValidator'
import {passwordValidator} from '../../../helpers/validators/passwordValidator'
import {APPENV} from "../../../core/config";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import useAsyncData from "../../../services/DataStorage/UseAsyncData";
import Toast from "react-native-toast-message";
import AuthentificationContext from "../../../context/AuthentificationContext";

export default function LoginScreen({navigation}) {
    const {setAuthData} = useContext(AuthentificationContext);
    const {updateStorage} = useAsyncData('data')
    const {data: dataLogin, loading, postData, status, error} = useFetchApi(APPENV.domain + '/api/auth/login')
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})

    useEffect(() => {
        if(dataLogin.token){
            setAuthData(dataLogin)
            updateStorage(JSON.stringify(dataLogin))
            navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }],
            })
        }
    }, [dataLogin])


    useEffect(() => {
        if(status >= 400 && status <= 600){
            // Toast.show({
            //     type: 'error',
            //     text1: 'Erreur de connexion',
            //     text2: error.error
            // });
        }
    }, [error])

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({...email, error: emailError})
            setPassword({...password, error: passwordError})
            return
        }
        postData({"username": email.value, "password": password.value})
    }

    return (
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <Logo/>
            <Header>Bienvenu</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({value: text, error: ''})}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Mot de passe"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({value: text, error: ''})}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    <Text style={styles.forgot}>Mot de passe oublie ?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" disabled={loading === true} onPress={onLoginPressed}>
                {loading === true ? 'Chargement...' : 'Connexion' }
            </Button>
            <View style={styles.row}>
                <Text>Vous n'avez pas de compte? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Inscrivez vous</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
