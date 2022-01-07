import React, {useEffect} from 'react';
import {Dimensions, Text, View} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import * as Animatable from "react-native-animatable";
import {theme} from "../../core/theme";
import Toast from "react-native-toast-message";


export default function QrCodeScan({reactivate, setData, data}) {

    useEffect(() => {
        setData('')
        return () => null
    }, [input]);

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

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = theme.colors.primary;

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = theme.colors.primary;

const iconScanColor = "blue";

const styles = {
    rectangleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },

    rectangle: {
        height: rectDimensions,
        width: rectDimensions,
        borderWidth: rectBorderWidth,
        borderColor: rectBorderColor,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },

    topOverlay: {
        flex: 1,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        justifyContent: "center",
        alignItems: "center"
    },

    bottomOverlay: {
        flex: 1,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor
    },

    leftAndRightOverlay: {
        height: SCREEN_WIDTH * 0.65,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor
    },

    scanBar: {
        width: scanBarWidth,
        height: scanBarHeight,
        backgroundColor: scanBarColor
    }
};