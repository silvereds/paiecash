import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { SIZES } from '../../../../../../constants';
import styles from './ItemCardtyle';

function ItemCard({data, onPress}) {
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image
            source={require('../../../../../../assets/masterCard.png')}
            style={styles.image}
            resizeMode='contain'
        />
        <Text style={styles.title}>{data.designation}</Text>
      </View>
      <View style={{paddingVertical:SIZES.base}}>
        <Text style={styles.textDisabled}>{data.description}</Text>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        
        <Image
            source={require('../../../../../../assets/logo-blanc.png')}
            style={styles.image}
            resizeMode='contain'
        />
        <Text style={styles.codePromo}>{data?.price} Paiecash</Text>
      </View>
      {/* <View style={{flexDirection:'row'}}>
      <View style={styles.imageBox}>
          <Image
            source={data.image}
            style={styles.image}
            resizeMode='contain'
          />
      </View>
        <View style={styles.textBox}>
          <Text style={styles.title}>{data.title}</Text>
          
          <Text style={styles.codePromo}>{data.price} Fcfa/An</Text>
        </View>
      <View>
      </View>

        
      </View> */}
      
    </TouchableOpacity>

    
  );
}

export default ItemCard;
