import React, {useContext, useEffect, useState} from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'
import {StyleSheet} from "react-native";
import AuthentificationContext from "../../context/AuthentificationContext";

export default function StartScreen({ navigation }) {
    const {authData} = useContext(AuthentificationContext)
    const [state, setState] = useState(true)

    useEffect(() => {
        if (authData.user) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Dashboard'}],
            })
        }
    }, [authData]);

    useEffect(() => {
        setTimeout(() => {
            authData.user === undefined && setState(true)
        }, 3000)
    }, [navigation])

    return (
    <Background loader={false}>
      <Logo />
        {state === true ?
            <>
                <Paragraph>
                    Envoyer de l'argent en toute simpliciter
                </Paragraph>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    Connexion
                </Button>
                <Button
                    mode="outlined"
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    Inscription
                </Button>
            </>
        : null}
    </Background>
  )
}

const styles = StyleSheet.create({
    root: {
        width: '100%'
    }
})
