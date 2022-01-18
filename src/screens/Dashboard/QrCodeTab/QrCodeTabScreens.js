import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import QrCodeScan from "../../../components/QrCode/QrCodeScan";
import PaiementScanInfo from "./PaiementScanInfo";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import CardSlider from "../../../components/CardSlider/CardSlider";


/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function QrCodeTabScreens(props) {
    const {data: dataFetch, loading, searchData} = useFetchApi(APPENV.domain + '/api/qr_code/check')
    const [reactivate, setActivate] = useState(true)
    const [data, setData] = useState('')

    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={{width: '100%'}}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        directionalLockEnabled={false}
                        disableScrollViewPanResponder
                        nestedScrollEnabled
                        removeClippedSubviews={false}>
                {data === '' ?
                    <View style={{flex: 1}}>
                        <QrCodeScan reactivate={reactivate} setData={setData} data={data}/>
                    </View>
                    :
                    <View>
                        <PaiementScanInfo setData={setData} data={data}
                                          searchData={searchData} dataFetch={dataFetch} loading={loading}/>
                        <View style={{width: '100%'}}>
                            <CardSlider/>
                        </View>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
}
