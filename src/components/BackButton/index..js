import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from './BackButtonStyle'

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <MaterialIcons name="keyboard-arrow-left" size={25} color="gray" />
      <Text style={styles.backText}>Retour</Text>
    </TouchableOpacity>
  )
}