import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from "../../../core/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: theme.colors.text
    },
    leftHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 10,
    },
    profileDetailsSection: {
        paddingTop: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    },
    profileInfoSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    profilePhoto: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    statisticsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    statisticsText: {
        color: theme.colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    statisticsTitle: {
        fontSize: 18,
        color: theme.colors.disabled,
    },
    profileCenterSection: {
        display: 'flex',
        alignItems: 'center',
    },
    nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
    designationText: {
        fontSize: 12,
        color: theme.colors.disabled,
        marginBottom: 10,
    },
    editProfileWrapper: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 25,
        borderRadius: 5,
        paddingVertical: 10,
    },
    editProfileText: {
        color: '#fff',
    },
    exploreSection: {
        paddingHorizontal: 16,
        paddingTop: 5,
    },
    exploreHeader: {
        fontWeight: 'bold',
        color: theme.colors.disabled,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18,
    },
    exploreContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    singleExplore: {
        height: 80,
        width: '30%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: '#fff',
        margin: 1,
        marginBottom: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    exploreText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: theme.colors.primary,
    },
});

export default styles;