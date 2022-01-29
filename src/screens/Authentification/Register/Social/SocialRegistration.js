import React, {useContext} from 'react';
import {View} from "react-native";
import GoogleRegistration from "./GoogleRegistration";
import FacebookRegistration from "./FacebookRegistration";
import AuthentificationContext from "../../../../context/AuthentificationContext";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function SocialRegistration({loading, navigation}) {
    const {setAuthData} = useContext(AuthentificationContext);

    return (
        <View style={{diplay: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <GoogleRegistration loading={loading} navigation={navigation} setAuthData={setAuthData}/>
            <FacebookRegistration loading={loading} navigation={navigation} setAuthData={setAuthData}/>
        </View>
    );
}
