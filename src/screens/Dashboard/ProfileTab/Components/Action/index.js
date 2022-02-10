import React from 'react';
import styles from '../../ProfileStyle';
import {Text, TouchableOpacity} from 'react-native';


export default Action = ({title, Icon, route, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.singleExplore}
      onPress={() => onPress(route)}>
      {Icon}
      <Text style={styles.exploreText}>{title}</Text>
    </TouchableOpacity>
  );
};
