import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../../../core/theme";
import AuthentificationContext from "../../../../../context/AuthentificationContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function CardInfo(props) {
    const {authData} = useContext(AuthentificationContext)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => ''}>
            <Text style={styles.projectTitle}>test</Text>
            <View style={styles.rowJustifyBetween}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons
                        name="calendar-month-outline"
                        size={20}
                        color={theme.colors.disabled}
                    />
                    <Text style={styles.projectBottomText}>Test</Text>
                </View>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons
                        name="checkbox-marked"
                        size={20}
                        color={theme.colors.disabled}
                    />
                    <Text style={styles.projectBottomText}>12 Tasks</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        height: 180,
        borderRadius: 7,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        margin: 1,
        marginBottom: 25,
    },
    projectTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5,
    },
    projectTeamAndProgress: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    projectDescription: {
        color: theme.colors.disabled,
        marginBottom: 10,
    },
    projectTeamTitle: {fontWeight: 'bold', marginBottom: 5},
    projectTeamWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    projectMemberPhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginLeft: -10,
    },
    projectProgress: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    rowJustifyBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectBottomText: {
        marginLeft: 5,
        fontSize: 14,
    },
    plusBtnContainer: {
        backgroundColor: theme.colors.primary,
        height: 40,
        width: 40,
        borderRadius: 50,
        marginLeft: -10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});