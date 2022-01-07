import React, {useState} from 'react'
import {Dimensions, ImageBackground, StyleSheet} from 'react-native'
import Background from '../../../components/Background'
import BackButton from '../../../components/BackButton'
import {theme} from '../../../core/theme'
import FirstRegistrations from "./FirstRegistrations";
import CompleteRegistration from "./CompleteRegistration";


export default function RegisterScreen({navigation}) {
    const [step, setStep] = useState(false)
    const [emailRegister, setEmailRegister] = useState(true)

    return (
        <Background>
            <ImageBackground
                source={require('../../../assets/background_dot.png')}
                resizeMode="repeat"
                style={styles.imageBackground}
            >
                <BackButton goBack={navigation.goBack}/>
                {step === false ?
                    <FirstRegistrations navigation={navigation} setEmailRegister={setEmailRegister} setView={setStep}/>
                    :
                    <CompleteRegistration emailRegister={emailRegister} navigation={navigation}/>
                }
            </ImageBackground>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        minHeight: Dimensions.get("window").height,
        backgroundColor: theme.colors.surface,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
})