import React from 'react'
import { Image } from 'react-native'
import styles from './LogoStyle'

export default function Logo() {
  return <Image source={require('../../assets/logo.png')} style={styles.image} />
}