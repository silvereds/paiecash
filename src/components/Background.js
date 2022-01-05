import React from 'react'
import {ImageBackground, KeyboardAvoidingView, StyleSheet} from 'react-native'
import {theme} from '../core/theme'
import LoaderActivity from "./Loader/LoaderActivity";

export default function Background({children, loader = false}) {

  return (
      <ImageBackground
          source={require('../assets/background_dot.png')}
          resizeMode="repeat"
          style={styles.background}
      >
      {loader === true  ?
          <LoaderActivity/>
      :
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
          </KeyboardAvoidingView>
      }
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
