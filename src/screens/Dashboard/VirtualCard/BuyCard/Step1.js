import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import shortid from 'shortid';
import styles from './BuyCardStyle';
import ItemCard from './Components/ItemCard';

export default function Step1({goToStep2, cards}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContainer}>
        <Text style={styles.textTitle}>Choisissez une carte</Text>
        {cards.map(card => (
          <ItemCard key={shortid()} data={card} onPress={goToStep2} />
        ))}
      </View>
    </ScrollView>
  );
}
