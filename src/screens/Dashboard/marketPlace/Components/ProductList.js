import React from "react";
import { View ,FlatList , Text ,Image ,TouchableOpacity } from "react-native";
import {SIZES,COLORS, FONTS} from "../../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "../styles";

const ProducList = ({product})=>{
    
return (
        <FlatList
            
            horizontal
            data={product}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item,index})=>{
                return(
                        <View style={styles.HorrizontalListProduct} key={item.id}>
                            <View style={{width:(SIZES.width)*0.4}}>
                                <Image 
                                    resizeMode='contain' 
                                    source={item.image} 
                                    style={{
                                        height:240,
                                        width:(SIZES.width)*0.4
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    padding:SIZES.base 
                                }}
                            >
                                <Text style={{color:COLORS.darkGray,...FONTS.h3}}> {item.name} </Text>
                                <Text style={{color:COLORS.darkGray,...FONTS.h3}}> {item.price} </Text>
                                <TouchableOpacity 
                                    style={styles.addToCardButton}
                                    onPress={()=>{}}
                                >
                                    <Icon name='shopping-cart' size={20} color='white'/>
                                    <Text style={{
                                        color:COLORS.white,
                                        marginLeft:SIZES.base,
                                        ...FONTS.body4
                                        }}>
                                        
                                        Mettre Au Panier
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    
                    
                     )
                }}
        />
    )
}
export default ProducList