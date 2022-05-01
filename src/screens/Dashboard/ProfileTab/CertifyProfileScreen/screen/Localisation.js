import React from 'react';
import { View, Text, ScrollView,TouchableOpacity ,StyleSheet} from 'react-native';
import useFetchApi from '../../../../../helpers/fetchApi/useFetchApi';
import styles from '../../ProfileStyle';
import {COLORS,FONTS , SIZES} from './../../../../../constants'

import {APPENV} from "../../../../../core/config";
import BlockInput from '../../../../../components/TextInput/BlockInput';
import Icon from "react-native-vector-icons/Feather"
import { SafeAreaView } from 'react-native-safe-area-context';
import TextButton from '../../../../../components/Button/TextButton';
import Toast from 'react-native-toast-message';
import AuthentificationContext from '../../../../../context/AuthentificationContext';
import Starter from '../../../../../components/Layout/Starter';
import FilterCountry from '../../../../Authentification/Register/FilterCountry';
import getUser from '../../../../../helpers/getUserInfo';

const  Localisation = ({navigation})=>{
  // const {authData,setAuthData} = React.useContext(AuthentificationContext);
  const {
    data:dataLocalisation,
    loading,
    postData,
    status,
    error
  } = useFetchApi(APPENV.domain + '/api/profile/certification/localisation')
  const [country_id,setCountry_id] = React.useState({value:authData?.country,error:'',name:''})
  const [city,setCity] = React.useState({value:authData?.city,error:''})
  const [postal_code,setPostal_code] = React.useState({value:'',error:''})
  const [adresse,setAdress] = React.useState({value:'',error:''})

  const [authData,setAuthData]= React.useState({})

  React.useEffect(()=>{
      getUser(setAuthData)
      setCountry_id({...country_id,value:authData?.country})
      setCity({...city,value:authData?.city})
      setPostal_code({...postal_code,value:authData?.postal_code})
      setAdress({...adresse,value:authData?.address})
      console.log(authData)
  },[authData?.country])

  React.useEffect(() => {
    if (status >= 400 && status <= 600) {
        Toast.show({
            type: 'error',
            text1: 'Erreur ',
            text2: error.message
        });
        
    }else{ 
      dataLocalisation?.message == "Localisation well update" 
        ?
        (
          Toast.show({
            type: 'info',
            text1: dataLocalisation.message,
          })
        )
        : 
        ''
    }
  }, [status,dataLocalisation,error,authData])

  function updateLocalisationIsEnable(){
    
      return  (country_id.value != '' && country_id.error == '')
              &&
              (city.error =='' && city.value !='') 
              && 
              (postal_code.error =='' && postal_code.value !='')
              && 
              (adresse.value != '' && adresse.error == '')
              &&
              loading!=true
    
  }

  function updateLocalisation(){
    console.log(city.value)
    postData({
      country_id:country_id.value,
      city:city.value,
      adresse:adresse.value,
      postal_code:postal_code.value,
      // api_key:APPENV.apiKey,
      // access_token:authData.token
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor:"#fff"}} >
        <Starter
          title={"Localisation"}
          subtitle="vous pouvez mettre à jour vos données de localisation "
          navigation={navigation}
          headerHeight={100}
        >
            <View style={{marginBottom:SIZES.padding,width:SIZES.width*0.8}}>
                <FilterCountry 
                    select={country_id.value} 
                    setSelect={(select)=>{setCountry_id({...country_id,value:select?.selectedList[0]?._id,name:select?.selectedList[0]?.value})}}
                />
            </View>
            
            <View style={styles.auth}>
                
                <BlockInput
                    label="Ville"
                    onChange={(value)=>{value.length < 3 
                    ? 
                    setCity({...city,error:'minimum 3 caractères'})
                    :
                    (setCity({value:value,error:''}))
                    }}
                    errorMsg={city.error}
                    appendComponent={
                        <View style={styles.center}>
                            <Icon 
                                name={city.error == '' ? "check-circle":"disc"} 
                                size={20} 
                                color={city.error == '' ? COLORS.green:COLORS.red}
                            />
                        </View>
                    }
                    prependComponent={<></>}
                    defaultValue={city.value}

                />
                <BlockInput
                    label="Code postal"
                    onChange={(value)=>{value.length < 3 
                    ? 
                    setPostal_code({...postal_code,error:'minimum 3 caractères'})
                    :
                    (setPostal_code({value:value,error:''}))
                    }}
                    errorMsg={postal_code.error}
                    appendComponent={
                        <View style={styles.center}>
                            <Icon 
                                name={postal_code.error == '' ? "check-circle":"disc"} 
                                size={20} 
                                color={postal_code.error == '' ? COLORS.green:COLORS.red}
                            />
                        </View>
                    }
                    prependComponent={<></>}
                    defaultValue={postal_code.value}
                    containerStyle={{marginTop:SIZES.padding}}

                />
                <BlockInput
                    label="Adresse"
                    onChange={(value)=>{value.length < 3 
                    ? 
                    setAdress({...adresse,error:'minimum 3 caractères'})
                    :
                    (setAdress({value:value,error:''}))
                    }}
                    errorMsg={adresse.error}
                    appendComponent={
                        <View style={styles.center}>
                            <Icon 
                                name={adresse.error == '' ? "check-circle":"disc"} 
                                size={20} 
                                color={adresse.error == '' ? COLORS.green:COLORS.red}
                            />
                        </View>
                    }
                    prependComponent={<></>}
                    defaultValue={adresse.value}
                    containerStyle={{marginTop:SIZES.padding}}

                />
            
            <View style={{marginTop:SIZES.padding,...styles.center}}>
                <TextButton
                label={loading === true ? 'requete en cour...' : 'envoyé'}
                labelStyle={{color:COLORS.white}}
                buttonStyle={{
                    width:SIZES.width*0.8,
                    height:50,
                    backgroundColor:updateLocalisationIsEnable()?COLORS.primary2:COLORS.lightGreen,
                    
                }}
                disabled={updateLocalisationIsEnable()?false:true}
                onPress={()=>updateLocalisationIsEnable()?updateLocalisation():""}
                />
            </View>
          </View>
      </Starter>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Localisation;
