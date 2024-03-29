import React, {useState} from 'react'
import Background from '../../../components/Background'
import FirstRegistrations from "./FirstRegistrations";
import ValidationRegistration from "./ValidationRegistration";


export default function RegisterScreen({navigation}) {
    const [step, setStep] = useState(false)
    const [userData, setUserData] = useState({})

    return (
        <Background navigation={navigation} background={true} back={true}>
            {step === false ?
                <FirstRegistrations navigation={navigation} setStep={setStep} setUserData={setUserData}/>
                :
                <ValidationRegistration navigation={navigation} userData={userData}/>
            }
        </Background>
    )
}