import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Logo from "../../../components/Logo";
import Header from "../../../components/Header";
import SelectPicker from "../../../components/SelectPicker/SelectPicker";
import TextInput from "../../../components/TextInput";
import {Checkbox, Text} from "react-native-paper";
import {theme} from "../../../core/theme";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import Toast from "react-native-toast-message";
import {emailValidator} from "../../../helpers/validators/emailValidator";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FirstRegistrations({setView, setEmailRegister, navigation}) {
    const {data: dataRegister, postData, status, loading, error} =
        useFetchApi(APPENV.domain + '/registration/first')
    const {data, searchData} = useFetchApi(APPENV.domain + '/api/enabled_countries')
    const [contact, setContact] = useState({value: '', error: ''})
    const [email, setEmail] = useState({value: '', error: ''})
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
        <View style={{
            width: '100%',
            flex: 1, alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Logo/>
            <Header>Creer un compte</Header>
            <SelectPicker data={dataCountry} value={input} setValue={setInput}/>
            <TextInput
                label="Numero de telephone"
                returnKeyType="next"
                value={contact.value}
                onChangeText={(text) => setContact({value: text, error: ''})}
                error={!!contact.error}
                errorText={contact.error}
            />
            <TextInput
                label="Adresse email"
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

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <View style={{paddingTop: 10, textAlign: 'center'}}>
                    <Text>Recevoir votre code de confirmation par sms? </Text>
                </View>
                <View style={{textAlign: 'center'}}>
                    <Checkbox
                        status={mode ? 'checked' : 'unchecked'}
                        color={theme.colors.primary}
                        onPress={() => setMode(!mode)}
                    />
                </View>
            </View>
            <Button
                mode="contained"
                disabled={loading}
                onPress={onSignUpPressed}
                style={{marginTop: 24}}
            >
                {loading ? 'Chargement...' : 'Valider'}
            </Button>
            <View style={styles.row}>
                <Text>Vous a avez deja en un compte ? </Text>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={styles.link}>Connectez vous</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
})
