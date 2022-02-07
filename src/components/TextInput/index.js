import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {TextInput as Input} from 'react-native-paper'
import styles from './TextInputStyle'
import {theme} from '../../core/theme'

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