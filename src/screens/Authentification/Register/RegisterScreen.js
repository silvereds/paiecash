import React, {useEffect, useState} from 'react'
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native'
import Background from '../../../components/Background'
import BackButton from '../../../components/BackButton'
import {theme} from '../../../core/theme'
import FirstRegistrations from "./FirstRegistrations";
import CompleteRegistration from "./CompleteRegistration";
import {Text} from "react-native-paper";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import Toast from "react-native-toast-message";
import {emailValidator} from "../../../helpers/validators/emailValidator";
import styles from "../Login/LoginStyle";


export default function RegisterScreen({navigation}) {
    const [step, setStep] = useState(false)
    const [emailRegister, setEmailRegister] = useState(true)
    const {data: dataRegister, postData, status, loading, error} =
        useFetchApi(APPENV.domain + '/registration/first')
    const {data, searchData} = useFetchApi(APPENV.domain + '/api/enabled_countries')
    const [contact, setContact] = useState({value: '', error: ''})
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [input, setInput] = useState(null)
    const [mode, setMode] = useState(false)
    const [dataCountry, setDataCountry] = useState([])

    useEffect(() => {
        searchData(`?`)
    }, []);

    useEffect(() => {
        if (status < 300 && status > 100) {
            setView(true)
            setEmailRegister(email.value)
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: dataRegister.message
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
    }, [dataRegister, error]);

    useEffect(() => {
        let dataIns = []
        data.length > 0 && data.map((item) =>
            dataIns.push({value: item.id, label: `( ${item.callingCode} ) ${item.name}`}))
        setDataCountry(dataIns)
    }, [data]);

    const onSignUpPressed = () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({...email, error: emailError})
            return
        }
        postData({
            "phone": contact.value,
            "email": email.value,
            "country": input,
            "confirmationMode": !mode
        })
    }

    return (
        <Background navigation={navigation}  background={true} back={true}>
            <View style={styles.bodyContent}>
                <Text style={styles.largeText}>Bienvenu !</Text>
                <Text style={styles.smallText}>
                    Inscrivez vous et entrer dans la grands communaute paiecash
                </Text>
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
                        onChangeText={(text) => setPassword({value: text, error: ''})}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputRow}>
                    <TextInput
                        label="Mot de passe"
                        returnKeyType="done"
                        value={password.value}
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

                <Button mode="contained" disabled={loading === true} onPress={() => {}}>
                    {loading === true ? 'Chargement...' : 'Connexion'}
                </Button>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 50,
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <Text style={{textAlign: 'center'}}>Vous a avez deja en un compte ? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: theme.colors.primary,
                        }}>Connectez vous</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    )
}