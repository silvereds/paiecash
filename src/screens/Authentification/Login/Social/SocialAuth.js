import React from 'react';
import {View} from "react-native";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function SocialAuth({loading, setAuthData, navigation}) {

    return (
        <View style={{diplay: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <GoogleAuth loading={loading} navigation={navigation} setAuthData={setAuthData}/>
            <FacebookAuth loading={loading} navigation={navigation} setAuthData={setAuthData}/>
        </View>
    );
}
