import React from 'react'
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <MaterialIcons name="keyboard-arrow-left" size={25} color="gray" />
      <Text style={styles.backText}>Retour</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifySelf: '',
    paddingVertical: 16,
    width: '100%'
  },
  image: {
    width: 24,
    height: 24,
  },
  backText: {
    fontSize: 17,
    marginLeft: 5,
    color: 'gray',
  }
})
