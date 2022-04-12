import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import QrCodeScan from "../../../components/QrCode/";
import PaiementScanInfo from "./PaiementScanInfo";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import CardSlider from "../../../components/CardSlider";
import styles from './QrCodeTabStyle';


/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function QrCodeTabScreens(props) {
    const {data: dataFetch, loading, searchData} = useFetchApi(APPENV.domain + '/api/qr_code/check')
    const [reactivate, setActivate] = useState(true)
    const [data, setData] = useState('')

    return (
        <SafeAreaView style={styles.fullWidth}>
            <ScrollView style={styles.fullWidth}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        directionalLockEnabled={false}
                        disableScrollViewPanResponder
                        nestedScrollEnabled
                        removeClippedSubviews={false}>
                {data === '' ?
                    <View style={{flex: 1}}>
                        <QrCodeScan reactivate={reactivate} setData={setData} data={data} setScan={()=>{}}/>
                    </View>
                    :
                    <View>
                        <PaiementScanInfo setData={setData} data={data}
                                          searchData={searchData} dataFetch={dataFetch} loading={loading}/>
                        <View style={styles.fullWidth}>
                            <CardSlider/>
                        </View>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
}
