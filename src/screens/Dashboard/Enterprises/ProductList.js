import React from "react";
import { View ,FlatList , Text ,Image ,TouchableOpacity } from "react-native";

import { SIZES,COLORS, FONTS } from "../../../constants";

const ProducList = ({product})=>{

return (
        <FlatList
            
            horizontal
            data={product}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item,index})=>{
                return(
                        <View 
                            style={{
                                flexDirection:'row',
                                flex:1,
                                justifyContent:'center',
                                alignItems:"center",
                                width:SIZES.width -SIZES.base,
                                ///marginTop:10,
                                marginBottom:10,
                                width:(SIZES.width -SIZES.base)*0.8,
                                }}
                            >
                            
                            <View 
                                style={{
                                    width:(SIZES.width -SIZES.base)*0.8/2,
                                    
                                }}
                                >
                                    <Image 
                                        resizeMode="contain" 
                                        source={item.image} 
                                        style={{
                                            height:200,
                                            width:(SIZES.width -SIZES.base)*0.8/2
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        width:(SIZES.width -SIZES.base)*0.8/2,
                                        height:200,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        
                                    }}
                                >
                                <Text style={{color:COLORS.darkGray,...FONTS.h3}}> {item.name} </Text>
                                <Text style={{color:COLORS.black,...FONTS.body4}}> {item.description} </Text>
                                <Text style={{color:COLORS.darkGray,...FONTS.h2}}> {item.price} euro </Text>
                                </View>
                        </View>
                    
                    
                     )
                }}
        />
    )
}
export default ProducList