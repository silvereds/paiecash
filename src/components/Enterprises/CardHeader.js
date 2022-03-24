import React from "react";
import { Image,Text , View } from "react-native";
import {COLORS } from "../../constants";
const CardHeader = ({image,title,subtitle,size,containerStyle,titleStyle})=>{
    return(
        <View style={{flexDirection:'row',...containerStyle}}>
            {image != null && <Image style={{borderRadius:size/2,height:size,width:size}}  source={image} />}
            <View>
                <Text style={{color:COLORS.darkGray,...titleStyle}}> {subtitle}  </Text>
                <Text style={{color:COLORS.darkGray2}}> {title} </Text>
            </View>
        </View>
    )
}
export default CardHeader