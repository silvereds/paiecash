import React, {useContext} from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import Button from "../../../components/Button";
import useAsyncData from "../../../services/DataStorage/UseAsyncData";
import AuthentificationContext from "../../../context/AuthentificationContext";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ProfileTabScreens({navigation}) {
    const {authData, setAuthData} = useContext(AuthentificationContext)
    const {data, removeStorage} = useAsyncData('data')


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
