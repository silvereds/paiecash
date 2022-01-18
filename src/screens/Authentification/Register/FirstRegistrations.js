import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import TextInput from "../../../components/TextInput";
import {Text} from "react-native-paper";
import {theme} from "../../../core/theme";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FirstRegistrations({setView, setEmailRegister, navigation}) {
    const {data: dataRegister, postData, status, loading, error} = useFetchApi(APPENV.domain + '/registration/first')
    const {data, searchData} = useFetchApi(APPENV.domain + '/api/enabled_countries')

    const [email, setEmail] = useState({value: '', error: ''})
    const [contact, setContact] = useState({value: '', error: ''})

    const [input, setInput] = useState(null)
    const [mode, setMode] = useState(false)
    const [dataCountry, setDataCountry] = useState([])

    useEffect(() => {
        searchData(`?`)
    }, []);

    return (
        <View style={styles.bodyContent}>
            <Text style={styles.largeText}>Bienvenu !</Text>
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

            <Button mode="contained" disabled={loading === true} onPress={() => {
            }}>
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
