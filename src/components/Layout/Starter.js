import React from "react";
import {View,Text,StyleSheet ,ImageBackground,TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  Icon  from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS, SIZES} from "../../constants";

const Starter = ({title,subtitle,navigation,children,headerHeight,headerIcon})=>{
    return(
        <KeyboardAwareScrollView>
        <View style={{backgroundColor:COLORS.primary2}} >

            {/*<ImageBackground source={require('../../assets/background.jpg')}>*/}
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity 
                    style={{padding:SIZES.padding , alignItems:'center',justifyContent:'center'}}
                    onPress={()=>navigation.goBack()}
                >
                    <Icon name="arrow-left" size={20} color="white"/>
                </TouchableOpacity>
                {title !=null &&  title!="" && <Text style={styles.subtitle}> {title} </Text>}
            </View>
               
                <View style={{height:headerHeight,...styles.containerTitle}}>
                    {headerIcon}
                    <Text style={styles.subtitle}> {subtitle} </Text>
                </View>
      
            
            
            
        </View>
        <View style={styles.rounder} >
            {children}
        </View>
        </KeyboardAwareScrollView>
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
        //marginTop:SIZES.base,
        ...FONTS.body3,
        
    },
    welcomeImage:{
        height:SIZES.width*0.2,
        height:SIZES.width*0.2
    },
    containerTitle:{
        //paddingTop:SIZES.padding,
        paddingHorizontal:SIZES.padding,
        alignItems:'center'
    },
    rounder:{
        flex:1,
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
export default Starter