import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import LoaderActivity from "./Loader/LoaderActivity";

export default function Background({children, loader = false}) {

  return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ImageBackground
              source={require('../assets/background_dot.png')}
              resizeMode="repeat"
              style={styles.background}
          >
            {loader === true  ?
                <LoaderActivity/>
                :
                {children}
            }
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
