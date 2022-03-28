import React from 'react';
import {Text, TouchableOpacity , View , Image} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';


const ItemTransaction = ({title,subtitle,image, route, onPress,price}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection:'row',
        height:80,
        borderBottomWidth:2,
        borderBottomColor:COLORS.lightGray2,
        width:SIZES.width*0.9,
        paddingVerical:SIZES.padding,
        
      }}
      onPress={onPress}
    >
      <View style={{justifyContent:'center',width:SIZES.width*0.2}}>
        <Image source={image} style={{height:50,width:50 , borderRadius:25,tintColor:COLORS.lightGreen}} resizeMode="contain"/>
      </View>
      <View style={{alignItems:'flex-start',justifyContent:'center',width:SIZES.width*0.6}}>
        <Text style={{color:COLORS.black,...FONTS.h3}}>{title}</Text>
        <Text style={{color:COLORS.darkGray,...FONTS.body5}}>{subtitle}</Text>
      </View>
      <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
        <Text> {price}$ </Text>
      </View>
      
    </TouchableOpacity>
  );
};
export default ItemTransaction

