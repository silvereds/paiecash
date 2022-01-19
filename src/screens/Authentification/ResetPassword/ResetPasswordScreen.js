import React, {useState} from 'react'
import Background from '../../../components/Background'
import ResetPassword from "./ResetPassword";
import RequestPassword from "./RequestPassword";

export default function ResetPasswordScreen({navigation}) {
    const [step, setStep] = useState(false)
    const [email, setEmail] = useState(false)

    return (
        <Background navigation={navigation} background={true} back={true}>
            {step === false ?
                <RequestPassword setEmail={setEmail} setStep={setStep}/>
                :
                <ResetPassword email={email} navigation={navigation}/>
            }
        </Background>
    )
}
