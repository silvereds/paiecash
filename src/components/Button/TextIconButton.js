import React from 'react';
import {Text, TouchableOpacity , View} from 'react-native';
import { SIZES ,COLORS, FONTS } from '../../constants';

const TextIconButton = ({label, Icon, onPress,buttonStyle}) => {
  return (
    <TouchableOpacity
      style={{
        
        
        justifyContent:'space-between',
        alignItems:'center',
        padding:SIZES.padding,
        
        
      }}
      onPress={onPress}
    >
      <View style={{justifyContent:'center',paddingHorizontal:SIZES.base}}>
          {Icon}
      </View>
      <View style={{alignItems:'flex-start',justifyContent:'center'}}>
        <Text style={{color:COLORS.black,...FONTS.h3}}>{label}</Text>
      </View>
      
      
    </TouchableOpacity>
  );
};
export default TextIconButton

