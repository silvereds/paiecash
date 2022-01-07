import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import QrCodeScan from "../../../components/QrCode/QrCodeScan";
import PaiementScanInfo from "./PaiementScanInfo";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";


/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function QrCodeTabScreens(props) {
    const {data: dataFetch, loading, getItem} = useFetchApi(APPENV.domain+'/api/qr_codes')
    const [reactivate, setActivate] = useState(true)
    const [data, setData] = useState('')

    return (
        <SafeAreaView style={{width: '100%'}}>
            {data === '' ?
                <View style={{flex: 1}}>
                    <QrCodeScan reactivate={reactivate} setData={setData} data={data}/>
                </View>
            :
                <View>
                    <PaiementScanInfo setData={setData} data={data}
                                      getItem={getItem} dataFetch={dataFetch} loading={loading}/>
                </View>
            }
        </SafeAreaView>
    );
}
