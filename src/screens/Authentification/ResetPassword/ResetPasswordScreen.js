import React, {useState} from 'react'
import Background from '../../../components/Background'
import BackButton from '../../../components/BackButton'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import {emailValidator} from '../../../helpers/validators/emailValidator'
import {Dimensions, ImageBackground, StyleSheet} from "react-native";
import {theme} from "../../../core/theme";

export default function ResetPasswordScreen({navigation}) {
    const [email, setEmail] = useState({value: '', error: ''})

    const sendResetPasswordEmail = () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({...email, error: emailError})
            return
        }
    navigation.navigate('LoginScreen')
  }

  return (
      <Background>
          <ImageBackground
              source={require('../../../assets/background_dot.png')}
              resizeMode="repeat"
              style={styles.imageBackground}
          >
              <BackButton goBack={navigation.goBack}/>
              <Logo/>
              <Header>Recuperer votre mot de passe</Header>
              <TextInput
                  label="E-mail address"
                  returnKeyType="done"
                  value={email.value}
                  onChangeText={(text) => setEmail({value: text, error: ''})}
                  error={!!email.error}
                  errorText={email.error}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  description="Vous allez recevoir un code de verfication pour reinitialiser votre compte."
              />
              <Button
                  mode="contained"
                  onPress={sendResetPasswordEmail}
                  style={{marginTop: 16}}
              >
                  Recuperation
              </Button>
          </ImageBackground>

      </Background>
  )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        minHeight: Dimensions.get("window").height,
        backgroundColor: theme.colors.surface,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})