import React, {useEffect} from 'react';
import {View} from "react-native";
import Button from "../../../components/Button";
import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";
import {GraphRequest, GraphRequestManager, LoginManager} from "react-native-fbsdk-next";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function SocialRegister({loading}) {
    useEffect(() => {
        GoogleSignin.configure();
    }, [])

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
                        '/me?fileds=email,name',
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
            console.log(result)
        }
    }

    const googleSignIn = async () => {
        GoogleSignin.signOut()
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
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
        <View style={{diplay: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '48%'}}>
                <Button mode="outlined" color="#DE4032" disabled={loading === true} onPress={googleSignIn}>
                    Google
                </Button>
            </View>
            <View style={{width: '48%'}}>
                <Button mode="outlined" color="#3b5998" disabled={loading === true} onPress={onFbLogin}>
                    Facebook
                </Button>
            </View>
        </View>
    );
}
