import {theme} from "../core/theme";
import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    menuWrapper: {
        backgroundColor: 'transparent',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#fff',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
        marginTop: 1,
        paddingHorizontal: 25,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    plusBtnContainer: {
        backgroundColor: theme.colors.primary,
        height: 60,
        width: 60,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        marginTop: -20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles