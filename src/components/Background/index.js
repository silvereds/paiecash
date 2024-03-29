import React from 'react'
import {Dimensions, ImageBackground, SafeAreaView, ScrollView, View} from 'react-native'
import {theme} from "../../core/theme";
import styles from "./BackgroundStyle";
import BackButton from '../BackButton/index.';

export default function Background({children, navigation, back = false, background}) {

    return (
        <SafeAreaView style={styles.background}>
            {back === true && <BackButton goBack={navigation.goBack}/>}
            {background === true ?
                <ScrollView style={{width: '100%'}} centerContent={true}>
                    <ImageBackground
                        source={require('../../assets/background_dot.png')}
                        resizeMode="repeat"
                        style={{
                            flex: 1,
                            paddingLeft: 12,
                            paddingRight: 12,
                            width: '100%',
                            background: theme.colors.surface,
                            minHeight: Dimensions.get("window").height,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                            {children}
                    </ImageBackground>
                </ScrollView>
                :
                <ScrollView style={styles.background} centerContent={true}
                            contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.container}>
                        {children}
                    </View>
                </ScrollView>
            }
        </SafeAreaView>
    )
}
