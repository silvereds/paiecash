import React from 'react';
import {Text, TouchableOpacity , View} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileActionButton = ({title,subtitle, Icon, route, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection:'row',
        height:80,
        borderBottomWidth:2,
        borderBottomColor:COLORS.lightGray2,
        width:SIZES.width*0.9
      }}
      onPress={onPress}
    >
      <View style={{justifyContent:'center',paddingHorizontal:SIZES.base,width:SIZES.width*0.2}}>
          {Icon}
      </View>
      <View style={{alignItems:'flex-start',justifyContent:'center',width:SIZES.width*0.6}}>
        <Text style={{color:COLORS.black,...FONTS.h3}}>{title}</Text>
        <Text style={{color:COLORS.darkGray,...FONTS.body5}}>{subtitle}</Text>
      </View>
      <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
        <FontAwesome5Icon name="angle-right" size={20} color={COLORS.lightGray1} />
      </View>
      
    </TouchableOpacity>
  );
};
export default ProfileActionButton

