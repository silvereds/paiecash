import React, {useState} from 'react';
import {TouchableOpacity, View} from "react-native";
import TextInput from "../../../components/TextInput";
import {Checkbox, Text} from "react-native-paper";
import {theme} from "../../../core/theme";
import Button from "../../../components/Button";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import styles from "../Login/LoginStyle";
import FilterCountry from "./FilterCountry";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FirstRegistrations({setView, setEmailRegister, navigation}) {
    const {data: dataRegister, postData, status, loading, error} =
        useFetchApi(APPENV.domain + '/api/authentification/registration')
    const [email, setEmail] = useState({value: '', error: ''})
    const [phone, setPhone] = useState({value: '', error: ''})
    const [firstName, setFirstName] = useState({value: '', error: ''})
    const [lastName, setLastName] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [passwordConfirm, setPasswordConfirm] = useState({value: '', error: ''})
    const [checked, setChecked] = React.useState(false);


    const onHandleSubmit = () => {

    }

    return (
        <View style={styles.bodyContent}>
            <Text style={styles.largeText}>Bienvenu !</Text>
            <Text style={styles.smallText}>
                Inscrivez vous et entrer dans la grands communaute paiecash
            </Text>
            <View style={styles.inputRow}>
                <FilterCountry/>
            </View>
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
                    label="Numero de telephone"
                    returnKeyType="next"
                    value={phone.value}
                    onChangeText={(text) => setPhone({value: text, error: ''})}
                    error={!!phone.error}
                    errorText={phone.error}
                    // render={props =>
                    //     <TextInputMask
                    //         {...props}
                    //         mask="+[00] [000] [000] [000]"
                    //     />
                    // }
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
            <View style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 24,
                marginTop: 10,
            }}>
                <Text style={{
                    fontSize: 13,
                    color: theme.colors.secondary,
                }}>Envoyer votre code de confirmation par sms ?</Text>

                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color={theme.colors.primary}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
            </View>

            <Button mode="contained" disabled={loading === true}>
                {loading === true ? 'Chargement...' : 'INSCIPTION'}
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
                        color: theme.colors.primary
                    }}>Connectez vous</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
