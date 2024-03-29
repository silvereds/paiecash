import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View ,Text ,Image } from "react-native";
import TextInput from "../../../components/TextInput";
//import {Text} from "react-native-paper";
import {theme} from "../../../core/theme";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import styles from "../Login/LoginStyle";
import {emailValidator} from "../../../helpers/validators/emailValidator";
import {passwordValidator} from "../../../helpers/validators/passwordValidator";
import {nameValidator} from "../../../helpers/validators/nameValidator";
import Toast from "react-native-toast-message";
import SocialRegistration from "./Social/SocialRegistration";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FirstRegistrations({setStep, navigation, setUserData}) {
    const {data: dataRegister, postData, status, loading, error} =
        useFetchApi(APPENV.domain + '/api/authentification/registration')
    const [email, setEmail] = useState({value: '', error: ''})
    const [firstName, setFirstName] = useState({value: '', error: ''})
    const [lastName, setLastName] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [passwordConfirm, setPasswordConfirm] = useState({value: '', error: ''})

    useEffect(() => {
        if (dataRegister.message) {
            setUserData({
                "email": email.value
            })
            dataRegister.message && Toast.show({
                type: 'success',
                text2: dataRegister.message
            })
            setStep(true)
        }

        return () => null
    }, [dataRegister]);


    useEffect(() => {
        error.message && Toast.show({
            type: 'error',
            text1: 'Erreur',
            text2: error.message
        })
        return () => null
    }, [dataRegister]);


    const onHandleSubmit = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const confirmpasswordError = passwordValidator(passwordConfirm.value)
        const firstNameError = nameValidator(firstName.value)
        const lastNameError = nameValidator(lastName.value)
        if (emailError || passwordError || firstNameError || lastNameError || confirmpasswordError) {
            setEmail({...email, error: emailError})
            setPassword({...password, error: passwordError})
            setPasswordConfirm({...passwordConfirm, error: confirmpasswordError})
            setFirstName({...firstName, error: firstNameError})
            setLastName({...lastName, error: lastNameError})
            return
        }

        postData({
            "first_name": firstName.value,
            "last_name": lastName.value,
            "email": email.value,
            "password": password.value,
            "confirm_password": password.value,
            "api_key": APPENV.apiKey
        })
    }

    return (
        <View style={styles.bodyContent}>
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',marginBottom:20}}>
                <Image source={require('../../../assets/logo-blanc.png')} style={{height:30,width:30,tintColor:'green'}}/>
                <Text style={styles.largeText}>Bienvenu !</Text>
            </View>
            
            <Text style={styles.smallText}>
                Inscrivez vous et entrer dans la grands communaute paiecash
            </Text>
            <View style={styles.inputRow}>
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
            </View>

            <View style={styles.inputRow}>
                <TextInput
                    label="Nom (s)"
                    returnKeyType="next"
                    value={firstName.value}
                    onChangeText={(text) => setFirstName({value: text, error: ''})}
                    error={!!firstName.error}
                    errorText={firstName.error}
                />
            </View>

            <View style={styles.inputRow}>
                <TextInput
                    label="Prenom (s)"
                    returnKeyType="next"
                    value={lastName.value}
                    onChangeText={(text) => setLastName({value: text, error: ''})}
                    error={!!lastName.error}
                    errorText={lastName.error}
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

            <Button mode="contained" disabled={loading === true} onPress={() => onHandleSubmit()}>
                {loading === true ? 'Chargement...' : 'INSCIPTION'}
            </Button>

            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                width: '100%',
                textAlign: 'center',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{textAlign: 'center'}}>Vous avez deja en un compte ? </Text>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: theme.colors.primary
                    }}>Connectez vous</Text>
                </TouchableOpacity>
                

            </View>
            <SocialRegistration navigation={navigation} loading={loading}/>
        </View>
    );
}
