import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../core/theme';
import styles from './EmptyListComponentStyle'

export function EmptyListComponent() {
  return (
    <View style={styles.emptyListContainer}>
      <MaterialCommunityIcons name="file" size={80} color={theme.colors.primary} />
      <Text style={styles.emptyListText}>None found</Text>
    </View>
  );
}