import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../../../../../components/Button';
import styles from './ItemCardtyle';

function ItemCard({data, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
      <View style={styles.imageBox}>
          <Image
            source={data.image}
            style={styles.image}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.textDisabled}>{data.description}</Text>
          <Text style={styles.codePromo}>{data.price} Fcfa/An</Text>
        </View>
    </TouchableOpacity>
  );
}

export default ItemCard;
