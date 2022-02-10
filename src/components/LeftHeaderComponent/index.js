import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from '../../core/theme';
import styles from '../../screens/Dashboard/VirtualCard/Recharge/rechargeStyle';
export default LeftHeaderComponent = ({title, navigation}) => {
    return(
        <View style={styles.hearderContainer}>
            <Pressable
            onPress={() => {
                navigation?.goBack();
            }}
            style={styles.headerIcon}>
            <Ionicons name="arrow-back" color={theme.colors.text} size={22} />
            </Pressable>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}