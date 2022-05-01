import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import shortid from 'shortid';
import { FONTS } from '../../../../constants';
import styles from './BuyCardStyle';
import ItemCard from './Components/ItemCard';

export default function Step1({goToStep2, cards , loading}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContainer}>
        <Text style={styles.textTitle}>Choisissez une carte</Text>
        {loading && 
          <View style={{justifyContent:'center' ,alignItems:'center' , height:100}}> 
            <Text style={{...FONTS.h2}}> chargement des cartes ...</Text>
          </View>
        }
        {}
        {cards.map(card => (
          <ItemCard key={shortid()} data={card} onPress={goToStep2} />
        ))}
      </View>
    </ScrollView>
  );
}
