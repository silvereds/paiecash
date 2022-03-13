import React from "react";
import {TouchableOpacity, Text} from 'react-native'
import { COLORS, FONTS } from "../../constants";


const TextButton = ({label,buttonStyle,labelStyle, disabled , onPress}) =>{
    return(
        <TouchableOpacity 
            style={{alignItems:'center', justifyContent:'center',...buttonStyle}}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{...FONTS.h3,...labelStyle}}> {label} </Text>    
        </TouchableOpacity>
    )
}
export default TextButton