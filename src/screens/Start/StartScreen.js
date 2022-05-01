import React, {useContext, useEffect, useState} from 'react'
import {ImageBackground} from "react-native";
import AuthentificationContext from "../../context/AuthentificationContext";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import styles from './StartStyle';
import axios from 'axios';
import { APPENV } from '../../core/config';
import UseAsyncData from '../../services/DataStorage/UseAsyncData';


export default function StartScreen({ navigation }) {
    //const {authData} = useContext(AuthentificationContext)
    const {data} = UseAsyncData('data')
    const [state, setState] = useState(false)

    useEffect(() => {
        console.log(data)
        if (data) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Dashboard'}],
            })
        }
        return () => null
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            data?.token === undefined && setState(true)
        }, 3000)

        return () => {setState(false)}
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