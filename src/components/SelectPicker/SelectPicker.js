import React from 'react';
import RNPickerSelect from "react-native-picker-select";
import {View} from "react-native";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function SelectPicker({data, value, setValue}) {

    return (
        <View style={{width: '100%', marginBottom: 5}}>
            <RNPickerSelect
                value={value}
                placeholder={{
                    label: 'Selectionner votre pays',
                    value: null,
                    color: '#9EA0A4',
                }}
                style={{
                    width: '100%',
                    inputAndroid: {
                        fontSize: 16,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        backgroundColor: 'white',
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 3,
                        color: 'black'
                    },
                    iconContainer: {
                        top: 5,
                        right: 15,
                    },
                }}
                onValueChange={(value) => setValue(value)}
                useNativeAndroidPickerStyle={false}
                items={data}
            />
        </View>
    );
}
