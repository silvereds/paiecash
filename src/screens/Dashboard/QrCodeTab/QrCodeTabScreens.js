import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import QrCodeScan from "../../../components/QrCode/QrCodeScan";


/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function QrCodeTabScreens(props) {
    const [reactivate, setActivate] = useState(true)
    const [data, setData] = useState('')

    return (
        <SafeAreaView style={{width: '100%'}}>
            {data === '' ?
                <View style={{flex: 1}}>
                    <QrCodeScan reactivate={reactivate} setData={setData} data={data}/>
                </View>
            :
                <View style={{flex: 1}}>

                </View>
            }

        </SafeAreaView>
    );
}
