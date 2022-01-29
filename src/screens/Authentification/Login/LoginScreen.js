import React, {useContext, useEffect, useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {Text} from 'react-native-paper'
import Background from '../../../components/Background'
import TextInput from '../../../components/TextInput'
import {theme} from '../../../core/theme'
import {emailValidator} from '../../../helpers/validators/emailValidator'
import {passwordValidator} from '../../../helpers/validators/passwordValidator'
import {APPENV} from "../../../core/config";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import useAsyncData from "../../../services/DataStorage/UseAsyncData";
import Toast from "react-native-toast-message";
import AuthentificationContext from "../../../context/AuthentificationContext";
import styles from "./LoginStyle";
import Button from "../../../components/Button";
import SocialAuth from "./Social/SocialAuth";

export default function LoginScreen({navigation}) {
    const {setAuthData} = useContext(AuthentificationContext);
    const {updateStorage} = useAsyncData('data')
    const {
        data: dataLogin,
        loading,
        postData,
        status,
        error
    } = useFetchApi(APPENV.domain + '/api/authentification/login')
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
        if (status >= 400 && status <= 600) {
            Toast.show({
                type: 'error',
                text1: 'Erreur de connexion',
                text2: error.message
            });
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
        <Background navigation={navigation} back={true} background={true}>
            <View style={styles.bodyContent}>
                <Text style={styles.largeText}>Bon retour parmis!</Text>
                <Text style={styles.smallText}>
                    Entrer vos identifiants et votre mot de passe pour vous connectez
                </Text>
                <SocialAuth setAuthData={setAuthData} loading={loading} navigation={navigation}/>
                <View style={styles.inputRow}>
                    <TextInput
                        label="Email ou numero de telephone"
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
                    <View style={{
                        width: '100%',
                        alignItems: 'flex-end',
                        marginBottom: 24,
                        marginTop: 10,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResetPasswordScreen')}
                        >
                            <Text style={{
                                fontSize: 13,
                                color: theme.colors.secondary,
                            }}>Mot de passe oublie ?</Text>
                        </TouchableOpacity>
                    </View>

                <Button mode="contained" disabled={loading === true} onPress={onLoginPressed}>
                    {loading === true ? 'Chargement...' : 'Connexion'}
                </Button>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <Text style={{textAlign: 'center'}}>Vous n'avez pas encore de compte ? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                        <Text style={{
                                fontWeight: 'bold',
                                color: theme.colors.primary,
                            }}>Inscrivez vous</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Background>
    )
}