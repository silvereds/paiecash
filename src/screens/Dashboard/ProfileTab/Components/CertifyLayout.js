import React from "react";
import {View,Text,StyleSheet ,ImageBackground,TouchableOpacity} from 'react-native'

import  Icon  from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS, SIZES} from "../../../../constants";

const CertifyLayout = ({title,subtitle,navigation,children})=>{
    return(
        <View style={{paddingBottom:SIZES.padding}} >

            <ImageBackground source={require('./../../../../assets/background.jpg')}>
                <TouchableOpacity 
                    style={{padding:SIZES.padding}}
                    onPress={()=>navigation.goBack()}
                >
                    <Icon name="arrow-left" size={20} color="white"/>
                </TouchableOpacity>
                <View style={styles.containerTitle}>
                    <Icon size={100} name="user" color="white"/>
                    {title !=null &&  title!="" && <Text style={styles.title}> {title} </Text>}
                    <Text style={styles.subtitle}> {subtitle} </Text>
                </View>
      
            </ImageBackground>
            <View style={styles.rounder} >
                {children}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    center:{
        alignItems:'center',
        justifyContent:"center"
    },
    title:{
        textAlign:'center',
        color:COLORS.white,
        ...FONTS.h2
    },
    subtitle:{
        textAlign:'center',
        color:COLORS.white,
        marginTop:SIZES.base,
        ...FONTS.body3,
        
    },
    welcomeImage:{
        height:SIZES.width*0.2,
        height:SIZES.width*0.2
    },
    containerTitle:{
        height:200,
        paddingTop:SIZES.padding,
        //backgroundColor:COLORS.primary2,
        paddingHorizontal:SIZES.padding,
        alignItems:'center'
    },
    rounder:{
        justifyContent:'center',
        alignItems:'center',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        marginTop:-20,
        paddingHorizontal:SIZES.padding,
        backgroundColor:COLORS.white,
        paddingTop:SIZES.padding,
        paddingBottom:SIZES.padding, 
        
    }
})

export default CertifyLayout