import React from 'react';
import {Image, Text, TouchableOpacity, View , StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../../../../constants';


function CardItem({data, onPress,activeCard,setActiveCard}) {
    
    const styles = StyleSheet.create({
        container:{
            //height:100,
            width:SIZES.width*0.7,
            backgroundColor:COLORS.primary2,
            margin:10,
            paddingRight:SIZES.padding,
            paddingLeft:SIZES.base,
            paddingVertical:SIZES.padding,
            borderRadius:10,
            borderWidth:activeCard === data ? 5 : 0,
            borderColor:activeCard === data ? COLORS.lightGray1 : '',
        },
        title:{
            fontSize:10,
            color:COLORS.white
        },
        textDisabled:{
            fontSize:10,
            color:COLORS.lightGray1,
            textAlign:'center'
        },
        image:{
            height:20,
            width:50
        },
        codePromo:{
            color:COLORS.white
        }
    })
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => setActiveCard(data)}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image
            source={require('../../../../assets/masterCard.png')}
            style={styles.image}
            resizeMode='contain'
        />
        <Text style={styles.title}>expiration {data.expiredAt}</Text>
      </View>
      <View style={{paddingVertical:SIZES.base,paddingVertical:SIZES.padding}}>
        <Text style={styles.textDisabled}>N° {data.cardNumber}</Text>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        
        <Image
            source={require('../../../../assets/logo-blanc.png')}
            style={styles.image}
            resizeMode='contain'
        />
        <Text style={styles.codePromo}> solde {data?.amount.toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')} £ </Text>
      </View> 
    </TouchableOpacity>

    
  );
}

export default CardItem;
