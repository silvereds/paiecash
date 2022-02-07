import React from 'react';
import RNPickerSelect from "react-native-picker-select";
import {View} from "react-native";
import styles from './SelectPickerStyle'
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
                    inputAndroid: styles.inputAndroid,
                    iconContainer: styles.iconContainer,
                }}
                onValueChange={(value) => setValue(value)}
                useNativeAndroidPickerStyle={false}
                items={data}
            />
        </View>
    );
}
