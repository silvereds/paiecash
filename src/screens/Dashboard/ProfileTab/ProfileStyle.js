import React from 'react';
import {StyleSheet} from 'react-native';
import { SIZES } from '../../../constants';
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
        //backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        height:200
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
        color: theme.colors.textWhite,
        fontSize: 20,
        fontWeight: 'bold',
    },
    statisticsTitle: {
        fontSize: 18,
        color: theme.colors.textWhite,
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
        //flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    singleExplore: {
        height: 50,
        width: SIZES.width*0.9,
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
        flexDirection:'row',
        justifyContent: 'flex-start',
        paddingHorizontal:SIZES.padding
        //alignSelf: 'flex-start',
    },
    exploreText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: theme.colors.primary,
        textAlign:'center',
        marginLeft:SIZES.padding
    },
    scrollbarTop: {
        paddingTop: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    },
    innerScrollbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textAmount: {
        color: theme.colors.primary,
        fontSize: 35,
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderTopEndRadius:15,
        marginTop:50,
    },
    buttonVerifyAccount: {
        color: theme.colors.error,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderColor: theme.colors.error,
        borderWidth: 1,
        borderRadius: 20,
        maxWidth: 220,
        marginTop: 10,
        flexDirection: 'row',
    },
    textVerifyAccount: {
        color: theme.colors.error,
        textAlign: 'center',
        marginHorizontal: 5
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default styles;