import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {theme} from "../../../core/theme";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function QrCodeTabScreens(props) {
    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={{width: '100%', padding: 10}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <Text>
                        Scanner le qrcode
                    </Text>
                    <View style={{borderWidth: 2, borderColor: theme.colors.primary, width: '75%', height: 300}}>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
