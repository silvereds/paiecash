import React, {useEffect} from 'react';
import {View} from "react-native";
import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";
import Button from "../../../../components/Button";
import useFetchApi from "../../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../../core/config";
import useAsyncData from "../../../../services/DataStorage/UseAsyncData";
import Toast from "react-native-toast-message";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../../constants';

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function GoogleRegistration({loading, setAuthData, navigation}) {
    const {updateStorage} = useAsyncData('data')
    const {data, postData, error, loading: loadSign, status} =
        useFetchApi(APPENV.domain + '/api/authentification/registration/social/google')

    useEffect(() => {
        if (status >= 200 && status <= 300 && data.token) {
            setAuthData(data)
            updateStorage(JSON.stringify(data))
            navigation.reset({
                index: 0,
                routes: [{name: 'Dashboard'}],
            })
        }

        if (status >= 400 && status <= 600) {
            Toast.show({
                type: 'error',
                text1: 'Erreur de connexion',
                text2: error.message
            });
        }
    }, [data, error])

    useEffect(() => {
        GoogleSignin.configure();
    }, [])

    const googleSignIn = async () => {
        await GoogleSignin.signOut()
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await postData({
                "email": userInfo.user?.email,
                "account_id": userInfo.user?.id,
                "first_name": userInfo.user?.familyName,
                "last_name": userInfo.user?.givenName,
                "api_key": APPENV.apiKey
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    return (
        <View style={{width: '48%'}}>
            <Button  color={COLORS.white} disabled={loading === true || loadSign} onPress={googleSignIn} style={{backgroundColor:"#d93025"}}>
            <Icon name="google-plus" size={20} /> Google
            </Button>
        </View>
    );
}
