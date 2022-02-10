import React from 'react';
import styles from '../../../ProfileTab/ProfileStyle'
import {Text, TouchableOpacity} from "react-native";


export default Action = ({title, route, Icon, navigation, cardSelect}) => {
  return (
    <TouchableOpacity
      style={styles.singleExplore}
      onPress={() =>
        navigation.navigate(route, {card: cardSelect})
      }>
      {Icon}
      <Text style={styles.exploreText}>{title}</Text>
    </TouchableOpacity>
  );
};
