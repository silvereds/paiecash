import React from "react";
import {Text , TouchableOpacity} from 'react-native'


import { SIZES,COLORS,FONTS} from "../../constants";

const ServicesButton = ({item,index,icon,onPress})=>{
    return(
        <TouchableOpacity
            style={{
            width:100,
            height:100,
            padding:SIZES.base,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.white2,
            marginTop:10,
            shadowColor: '#000',
            shadowOffset: {width: 0.8, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 1,
            elevation: 2,
            borderRadius:10,

            }}
            
            onPress={onPress}
        >
            {icon}
            
            <Text style={{color:COLORS.darkGray,...FONTS.h4}}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}
export default ServicesButton