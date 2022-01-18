import React, {useState} from 'react'
import Background from '../../../components/Background'
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import {APPENV} from "../../../core/config";
import FirstRegistrations from "./FirstRegistrations";
import ValidationRegistration from "./ValidationRegistration";


export default function RegisterScreen({navigation}) {
    const [step, setStep] = useState(false)
    const [emailRegister, setEmailRegister] = useState(true)
    const {data: dataRegister, postData, status, loading, error} =
        useFetchApi(APPENV.domain + '/registration/first')
    const {data, searchData} = useFetchApi(APPENV.domain + '/api/enabled_countries')

    return (
        <Background navigation={navigation} background={true} back={true}>
            {step === true ?
                <FirstRegistrations/>
                :
                <ValidationRegistration/>
            }
        </Background>
    )
}