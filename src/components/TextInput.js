import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {TextInput as Input} from 'react-native-paper'
import {theme} from '../core/theme'

export default function TextInput({errorText, description, secureTextEntry, ifEye = false, ...props}) {
  const [secure, setSecure] = useState(secureTextEntry)
  return (
      <View style={styles.container}>
        <Input
            style={styles.input}
            selectionColor={theme.colors.primary}
            secureTextEntry={secure}
            right={ifEye === true && <Input.Icon onPress={() => setSecure(p => !p)} name="eye"/>}
            {...props}
        />
        {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 10
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
