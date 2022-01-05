import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Button from "../../../components/Button";
import useAsyncStorage from "../../../services/DataStorage/DataStorage";
import Authentification from "../../../context/Authentification";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ProfileTabScreens({navigation}) {
    const {authData, setAuthData} = useContext(Authentification)
    const {data, removeStorage} = useAsyncStorage('data')


    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={{width: '100%', padding: 10}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <Text>
                        Profile
                    </Text>
                    <Button mode="outlined" onPress={() => {
                        removeStorage()
                        setAuthData({})
                        navigation.reset({
                            index: 0,
                            routes: [{name: 'StartScreen'}],
                        })
                    }}>
                        Deconnexion
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
