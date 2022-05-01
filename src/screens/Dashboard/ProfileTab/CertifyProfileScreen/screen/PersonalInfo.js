import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView,TouchableOpacity,SafeAreaView ,StyleSheet} from 'react-native';
import useFetchApi from '../../../../../helpers/fetchApi/useFetchApi';
import styles from '../../ProfileStyle';
import {COLORS,FONTS , SIZES} from './../../../../../constants'
import Starter from '../../../../../components/Layout/Starter';
import {APPENV} from "../../../../../core/config";
import BlockInput from '../../../../../components/TextInput/BlockInput';
import Icon from "react-native-vector-icons/Feather"
import TextButton from '../../../../../components/Button/TextButton';
import Toast from 'react-native-toast-message';
import AuthentificationContext from '../../../../../context/AuthentificationContext';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import getUser from '../../../../../helpers/getUserInfo';


const  CertifyProfileInfoScreen = ({navigation})=>{

  const {
    data :personnalData,
    loading,
    postData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/profile/certification/personnal-information')

  const [firstName,setFirstName] = React.useState("")
  const [firstNameError,setFirstNameError] = React.useState("")
  const [lastName,setLastName] = React.useState("")
  const [lastNameError,setLastNameError] = React.useState("")
  const [user_cni,setCni] = React.useState({value:'', error:''})
  const [birthday,setBirthay] = React.useState({
    day:'',
    month:'',
    year:'',
    error:''
  })
  const [authData,setAuthData]= useState({})
  useEffect(()=>{
      getUser(setAuthData)
      setFirstName(authData?.firstName)
      setLastName(authData.lastName)
      setCni({...user_cni,value:authData?.cni})
      if(authData?.birthDay){
        let birth = authData?.birthDay.split("T")[0].split("-")
        setBirthay({...birthday,day:birth[2],month:birth[1],year:birth[0]})
      }
  },[authData?.firstName])

  React.useEffect(() => {
    
    if (status >= 400 && status <= 600) {
        Toast.show({
            type: 'error',
            text1: 'Erreur de connexion',
            text2: error.message
        });
    }else{
      personnalData.message == "Information personnel mis a jour" ? 
        (
          Toast.show({
          type: 'info',
          text1: personnalData.message,
          }),setAuthData({...authData,birthday:birthday.year+"-"+birthday.month+"-"+birthday.day})
        )
      :''
     }
    
  }, [error,personnalData,status])



  function RegisterIsEnable(){
    return(
            (firstName !="" && lastName!="" && firstNameError =='' && lastNameError =='') 
            &&
            (birthday.day.length != 0 && birthday.month.length ==2 && birthday.error == '')
            &&
            (user_cni.value != '' && user_cni.error == '')
            &&
            loading == false
          )
  }


  function updatePersonnalInfo(){

    return postData({
      first_name: firstName,
      last_name: lastName,
      birthday:birthday.year+"-"+birthday.month+"-"+birthday.day,
      cni:user_cni.value,
      // api_key:APPENV.apiKey,
      // access_token:authData.token
    })
    
  }

  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
    <Starter
      subtitle={"vous pouvez mettre à jour vos informations de profile maintenant "} 
      title={""}
      navigation={navigation}
      headerHeight={200}
      headerIcon={<FontAweSome5  name='user-circle' size={70} color={COLORS.white}/>}
    >
        
        <View style={styles.auth}>
            <BlockInput
                label="Nom (s)"
                onChange={(value)=>{value.length < 3 
                  ? 
                  setFirstNameError("nom invalide")
                  :
                  (setFirstNameError(""),setFirstName(value))
                }}
                errorMsg={firstNameError}
                appendComponent={
                    <View style={styles.center}>
                        <Icon 
                            name={firstName == "" ||(firstName !="" &&  firstNameError == "") ? "check-circle":"disc"} 
                            size={20} 
                            color={firstName == "" ||(firstName !="" &&  firstNameError == "") ? COLORS.green:COLORS.red}
                        />
                    </View>
                }
                prependComponent={<></>}
                defaultValue={firstName}

            />
            <BlockInput
                label="Prenom (s)"
                onChange={(value)=>{value.length < 3 
                  ?
                  setLastNameError("prenom invalide")
                  :
                  (setLastName(value),setLastNameError(""))
                }}
                errorMsg={lastNameError}
                appendComponent={
                    <View style={styles.center}>
                        <Icon 
                            name={lastName == "" ||(lastName !="" &&  lastNameError == "") ? "check-circle":"disc"} 
                            size={20} 
                            color={lastName == "" ||(lastName !="" &&  lastNameError == "") ? COLORS.green:COLORS.red}
                        />
                    </View>
                }
                prependComponent={<></>}
                defaultValue={lastName}

            />
            <Text style={{marginTop:SIZES.base,...FONTS.h3}}>Date de naissance</Text>
            {birthday.error !='' && <Text style={{color:COLORS.red}}> {birthday.error} </Text>}
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <BlockInput 
                  containerStyle={{width:SIZES.width*0.25}}
                  keyboardType="numeric"
                  placeholder="Day"
                  onChange={(value)=>setBirthay({...birthday,day:value})}
                  defaultValue={birthday.day}
              />
              <BlockInput 
                  containerStyle={{width:SIZES.width*0.25}}
                  keyboardType="numeric"
                  placeholder="Month"
                  onChange={(value)=>{
                    (value.length == 2 && parseInt(value)<=12 && parseInt(value)>=1)?
                    setBirthay({...birthday,month:value,error:''}):setBirthay({...birthday,error:"le mois n'est pas correcte ,un  exemple 1-07-1998"})
                  }
                  }
                  defaultValue={birthday.month}
              />
              <BlockInput 
                  containerStyle={{width:SIZES.width*0.3}}
                  keyboardType="numeric"
                  placeholder="Year"
                  onChange={(value)=>value.length==4?setBirthay({...birthday,year:value,error:''}):setBirthay({...birthday,error:"invalid year"})}
                  defaultValue={birthday.year}
              />
            </View>
            <BlockInput
                containerStyle={{marginTop:SIZES.base}}
                label="Numero cni"
                onChange={(value)=>{value.length < 4 ?setCni({...user_cni,error:'cni invalide'}):setCni({value:value,error:''})}}
                errorMsg={user_cni.error}
                appendComponent={
                    <View style={styles.center}>
                        <Icon 
                            name={user_cni.value == "" ||(user_cni.value !="" &&  user_cni.error == "") ? "check-circle":"disc"} 
                            size={20} 
                            color={user_cni.value == "" ||(user_cni.value !="" &&  user_cni.error == "") ? COLORS.green:COLORS.red}
                        />
                    </View>
                }
                prependComponent={<></>}
                defaultValue={user_cni.value}
            />
            <View style={{marginTop:SIZES.padding,...styles.center}}>
                <TextButton 
                    label={loading === true ? 'Réinitialisation en cours...' : 'Réinitialiser'}
                    labelStyle={{color:COLORS.white}}
                    buttonStyle={{
                      width:SIZES.width*0.8,
                      height:50,
                      backgroundColor:RegisterIsEnable()?COLORS.primary2:COLORS.lightGreen,
                      //borderRadius:20
                    }}
                    disabled={RegisterIsEnable() ? false:true}
                    onPress={()=>updatePersonnalInfo()}
                />
            </View>
        </View>
    </Starter>
    </ScrollView>
  );
}

export default CertifyProfileInfoScreen;
