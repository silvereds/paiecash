import React from 'react';
import Carousel from "react-native-snap-carousel";
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../../../core/theme";
import ItemCardPartenaires from "../ItemCardPartenaires";
import styles, { itemWidth, sliderWidth } from './PartenairesStyle';
import PartenaireList from '../../../../../constants/Partenaires';
import { SIZES } from '../../../../../constants';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function Partenaires(props) {

    return (
        <View style={{
            flex: 1, paddingTop: 15,
            paddingHorizontal: 16,
        }}>
            <View>
                <Text style={{
                    color: theme.colors.backdrop,
                    fontWeight: 'bold', fontSize: 20
                }}>Il utilise paiecash</Text>
            </View>
            <FlatList
                horizontal
                data={PartenaireList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity 
                                style={{
                                    width:SIZES.width*0.9,
                                    height:200,
                                    borderRadius:20,
                                    marginTop:SIZES.padding,
                                    backgroundColor:'#fff',
                                    
                                   // paddingHorizontal:SIZES.padding
                                    }}
                            >
                                <Image 
                                    source={item.image} 
                                    resizeMode='contain'
                                    style={{
                                        height:200,
                                        width:SIZES.width*0.85,
                                        borderRadius:20
                                    }}
                                />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>

    );
}

export default Partenaires