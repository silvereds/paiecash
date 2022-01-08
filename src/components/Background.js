import React from 'react'
import {Dimensions, ImageBackground, ScrollView, StyleSheet, View} from 'react-native'
import {theme} from "../core/theme";
import BackButton from "./BackButton";

export default function Background({children, navigation, back = false, background}) {

    return (
        <ScrollView style={styles.background}
                    contentInsetAdjustmentBehavior="automatic">
            {background === true ?
                <ImageBackground
                    source={require('../assets/background_dot.png')}
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
                    {back === true && <BackButton goBack={navigation.goBack}/>}
                    {children}
                </ImageBackground>
                :
                <View style={styles.container}>
                    {back === true && <BackButton goBack={navigation.goBack}/>}
                    {children}
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
    container: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        width: '100%',
        minHeight: Dimensions.get("window").height,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
