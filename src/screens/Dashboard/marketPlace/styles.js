import React from 'react'
import {StyleSheet} from 'react-native'
import { SIZES ,COLORS,FONTS } from '../../../constants'
const styles = StyleSheet.create({
    header:{
            height:50,
            flexDirection:'row',
            paddingHorizontal:SIZES.base,
            alignItems:'center',
        },
    buttonBack:{
            backgroundColor:'#4cbe5e45',
            height:50,
            width:50,
            borderRadius:25,
            alignItems:'center',
            justifyContent:'center'
        },
    mainView:{
        marginTop:-50,
        backgroundColor:COLORS.white,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        alignItems:'center',
        justifyContent:'center'
        
    },
    affiche:{
        alignItems:'center',
        marginTop:-50,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        width:SIZES.width*0.95,
        elevation:10,
        paddingBottom:20
    },
    vs:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        backgroundColor:'yellow',
        padding:SIZES.padding
    },
    reservationButton:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primary2,
        width:SIZES.width*0.8,
        borderRadius:20
    },
    HorrizontalListProduct:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        width:SIZES.width -SIZES.base,
        marginTop:20,
        marginBottom:10,
        width:(SIZES.width )*0.9,
        },
    addToCardButton:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.darkBlue,
        padding:SIZES.base,
        borderRadius:20
    }
})
export default styles