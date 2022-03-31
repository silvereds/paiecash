import React from 'react';
import Carousel from "react-native-snap-carousel";
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../../../core/theme";
import ItemCardPartenaires from "../ItemCardPartenaires";
import styles, { itemWidth, sliderWidth } from './PartenairesStyle';
import PartenaireList from '../../../../../constants/Partenaires';
import { COLORS, FONTS, SIZES } from '../../../../../constants';
import { FlatList, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

function Partenaires({navigation}) {

    return (
        <View style={{flex: 1,marginTop:20}}>
            <View style={{paddingVertical:SIZES.base,paddingHorizontal:SIZES.base}}> 
                <Text style={{color: COLORS.black,...FONTS.h3}}>Ils utilisent paiecash</Text>
            </View>
            <FlatList
                horizontal
                data={PartenaireList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item,index})=>{
                    return(
                        <View style={{backgroundColor:COLORS.lightGray2,paddingHorizontal:SIZES.base}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image 
                                    source={item.image} 
                                    resizeMode='contain'
                                    style={{
                                        height:150,
                                        width:SIZES.width*0.5,
                                        borderRadius:20
                                    }}
                                />
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',paddingBottom:SIZES.padding}}>
                                <Text style={{color:COLORS.darkGray,...FONTS.h2}}>
                                    {item.title}
                                </Text>
                                <Text style={{color:COLORS.darkGray,...FONTS.body4}}>
                                    {item.description}
                                </Text>
                                <TouchableHighlight 
                                    style={{
                                        height:50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        backgroundColor:COLORS.lightGray,
                                        width:SIZES.width*0.8
                                    }}
                                    onPress={()=>navigation.navigate('market')}
                                >
                                    <Text style={{color:COLORS.darkGray,...FONTS.body4}}>
                                        {item.buttonText}
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default Partenaires