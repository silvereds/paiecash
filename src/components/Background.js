import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {theme} from "../core/theme";

export default function Background({children}) {

  return (
      <ScrollView style={styles.background}
                  contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          {children}
        </View>
      </ScrollView>
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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
