import React from 'react';
import { Pressable, Text, TouchableHighlight, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { theme } from '../../../../../core/theme';
import styles from '../../TransfertCardStyle';

  function random() {
    return Math.floor(Math.random() * 255);
  }

export default function RecentContact ({data, onSelect}) {

  return (
    <TouchableHighlight onPress={() => onSelect(data)}>
      <View style={styles.container2}>
        <View
          style={{
            backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
            ...styles.VerticalBar,
          }}
        />
        <View style={styles.taskMiddleColumn}>
          <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">
            {data.cardOwner}
          </Text>
          <Text style={styles.taskDesc} numberOfLines={1} ellipsizeMode="tail">
            {data.lastAmount}
          </Text>
        </View>
        <View style={styles.starBox}>
          <Pressable onPress={() => {}}>
            <AntDesign
              name={data.isFavorite ? 'star' : 'staro'}
              size={16}
              color={
                data.isFavorite ? theme.colors.primary : theme.colors.disabled
              }
            />
          </Pressable>
          <Pressable>
            <AntDesign
              name="deleteuser"
              size={16}
              color={theme.colors.disabled}
            />
          </Pressable>
        </View>
      </View>
    </TouchableHighlight>
  );
}
