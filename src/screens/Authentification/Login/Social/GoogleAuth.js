import React, {useEffect} from 'react';
import {View} from "react-native";
import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";
import Button from "../../../../components/Button";
import useFetchApi from "../../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../../core/config";
import useAsyncData from "../../../../services/DataStorage/UseAsyncData";
import Toast from "react-native-toast-message";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function GoogleAuth({loading, setAuthData, navigation}) {
    const {updateStorage} = useAsyncData('data')
    const {data, postData, error, loading: loadSign, status} =
        useFetchApi(APPENV.domain + '/api/authentification/login/social/connect/google')

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
        console.log(error, data)
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
                "username": userInfo.user?.email,
                "account_id": userInfo.user?.id,
                "api_key": APPENV.apiKey
            })
            console.log(userInfo.user)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error)
            } else {
                // some other error happened
                console.log(error)
            }
        }
    };

    return (
        <View style={{width: '48%'}}>
            <Button mode="outlined" color="#DE4032" disabled={loading === true || loadSign} onPress={googleSignIn}>
                Google
            </Button>
        </View>
    );
}
