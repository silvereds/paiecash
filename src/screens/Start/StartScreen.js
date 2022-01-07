import React, {useContext, useEffect, useState} from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'
import {Dimensions, ImageBackground, StyleSheet} from "react-native";
import AuthentificationContext from "../../context/AuthentificationContext";
import {theme} from "../../core/theme";

export default function StartScreen({ navigation }) {
    const {authData} = useContext(AuthentificationContext)
    const [state, setState] = useState(false)

    useEffect(() => {
        if (authData.user) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Dashboard'}],
            })
        }

        return () => null
    }, [authData]);

    useEffect(() => {
        setTimeout(() => {
            authData.user === undefined && setState(true)
        }, 3000)

        return () => null
    }, [navigation])

    return (
        <Background>
            <ImageBackground
                source={require('../../assets/background_dot.png')}
                resizeMode="repeat"
                style={styles.imageBackground}
            >
                <Logo/>
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
