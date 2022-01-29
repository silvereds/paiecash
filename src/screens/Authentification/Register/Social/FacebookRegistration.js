import React, {useEffect} from 'react';
import {GraphRequest, GraphRequestManager, LoginManager} from "react-native-fbsdk-next";
import {View} from "react-native";
import useFetchApi from "../../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../../core/config";
import Button from "../../../../components/Button";
import useAsyncData from "../../../../services/DataStorage/UseAsyncData";
import Toast from "react-native-toast-message";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FacebookRegistration({loading, setAuthData, navigation}) {
    const {updateStorage} = useAsyncData('data')
    const {data, postData, error, status, loading: loadSocial} =
        useFetchApi(APPENV.domain + '/api/authentification/registration/social/facebook')

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

    const fbLogin = (resCallBack) => {
        LoginManager.logOut()
        return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
            result => {
                console.log('fb ====> ', result)
                if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
                    resCallBack({message: 'email is required'})
                }

                if (result.isCancelled) {
                    console.log('error')
                } else {
                    const infoRequest = new GraphRequest(
                        '/me?fields=email,name',
                        null,
                        resCallBack
                    )
                    new GraphRequestManager().addRequest(infoRequest).start()
                }
            },
            function (error) {
                console.log("login fail : " + error)
            }
        )
    }

    const onFbLogin = async () => {
        try {
            await fbLogin(_responseInfoCallBack)
        } catch (error) {
            console.log('error: ' + error)
        }
    }

    const _responseInfoCallBack = async (error, result) => {
        if (error) {
            console.log(error)
        } else {
            await postData({
                "first_name": result.name,
                "email": result.email,
                "account_id": result.id,
                "api_key": APPENV.apiKey
            })
        }
    }

    return (
        <View style={{width: '48%'}}>
            <Button mode="outlined" color="#3b5998" disabled={loading === true || loadSocial} onPress={onFbLogin}>
                Facebook
            </Button>
        </View>
    );
}
