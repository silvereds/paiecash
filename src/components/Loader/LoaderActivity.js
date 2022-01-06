import React from 'react';
import {ActivityIndicator} from "react-native-paper";
import {View, StyleSheet} from "react-native";
import {theme} from "../../core/theme";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function LoaderActivity(props) {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        opacity: 0.5
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});