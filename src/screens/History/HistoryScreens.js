import React from 'react';
import Background from "../../components/Background";
import {Text} from "react-native";
import Button from "../../components/Button";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HistoryScreens({navigation}) {

    return (
        <Background>
            <Text>
                History
            </Text>
            <Button
                title="Rentrer"
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    navigation.navigate('SomeScreen');
                }}
            />
        </Background>
    );
}
