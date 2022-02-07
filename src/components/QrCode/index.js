import React, {useEffect} from 'react';
import {Dimensions, Text, View} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import * as Animatable from "react-native-animatable";
import {theme} from "../../core/theme";
import Toast from "react-native-toast-message";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './QrCodeStyle';


export default function QrCodeScan({reactivate, setData, data}) {

    useEffect(() => {
        setData('')
        return () => null
    }, []);

    const onSuccess = (e)  => {
        e.type === 'QR_CODE' && setData(e.data)
        e.type !== 'QR_CODE' && Toast.show({
            type: 'error',
            text1: 'Qr code invalide'
        })
    }

    const makeSlideOutTranslation = (translationType, fromValue) => {
        return {
            from: {[translationType]: SCREEN_WIDTH * 0.5},
            to: {[translationType]: fromValue }
        };
    }

    return (
        <QRCodeScanner
            showMarker
            reactivate={data === '' || reactivate}
            onRead={onSuccess}
            cameraStyle={{ height: SCREEN_HEIGHT/1.2 }}
            customMarker={
                <View style={styles.rectangleContainer}>
                    <View style={styles.topOverlay}/>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.leftAndRightOverlay} />

                        <View style={styles.rectangle}>
                            {/*<Icon*/}
                            {/*    name="ios-qr-scanner"*/}
                            {/*    size={SCREEN_WIDTH * 0.73}*/}
                            {/*    color={iconScanColor}*/}
                            {/*/>*/}
                            <Animatable.View
                                style={styles.scanBar}
                                direction="alternate-reverse"
                                iterationCount="infinite"
                                duration={3500}
                                easing="linear"
                                animation={makeSlideOutTranslation(
                                    "translateY",
                                    SCREEN_WIDTH * -0.54
                                )}
                            />
                        </View>
                        <View style={styles.leftAndRightOverlay} />
                    </View>
                    <View style={styles.bottomOverlay} />
                </View>
            }
        />
    );
}