import React from 'react';
import { View, SafeAreaView, ScrollView} from 'react-native';
import FilterCountry from '../../../../Authentification/Register/FilterCountry';
import styles from '../../ProfileStyle';
import {COLORS,FONTS,SIZES} from './../../../../../constants'

import Starter from '../../../../../components/Layout/Starter';
import useFetchApi from '../../../../../helpers/fetchApi/useFetchApi';
import {APPENV} from "../../../../../core/config";
import TextInput from '../../../../../components/TextInput';
import TextButton from '../../../../../components/Button/TextButton';
import AuthentificationContext from '../../../../../context/AuthentificationContext';
import Toast from 'react-native-toast-message';

const  CertifyProfilePhoneScreen = ({navigation})=>{  
  const {authData,setAuthData} = React.useContext(AuthentificationContext);
  //const {data, searchData} = useFetchApi(APPENV.domain + '/api/enable-country')

  const {
    data:firstPhone ,
    loading,
    postData,
    status,
    error,
  } = useFetchApi(APPENV.domain+'/api/profile/certification/phone/confirm')
  

  const [number,setNumber]= React.useState({country_id:null,old:'',new:''})


  React.useEffect(() => {

    if (status >= 400 && status <= 600) {
        Toast.show({
            type: 'error',
            text1: 'Erreur',
            text2: error?.message
        });
    }else{
      firstPhone.message == "Phone verified" ? 
        (
          Toast.show({
          type: 'info',
          text1: firstPhone.message,
          })
        )
      :''
     }
     
  }, [error,firstPhone,status])


  function phoneResetEnable(){
    if(authData.user.phone != null){
      return (number.new.length != 0 && number.old.length != 0 && loading == false && number.country_id != null)
    }else{
      return (number.new.length != 0 && loading == false && number.country_id != null)
    }
  
  }

  function updatePhone(){
    postData({
      //country_id: number.country_id,
      //phone: authData.user.phone != null?  number.old : number.new,
      code:"0100",
      api_key: APPENV.apiKey,
      access_token: authData.token
    })
    console.log("loading = ",loading)
  }
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={{backgroundColor:"#fff"}}>
      <Starter
        subtitle={authData.user?.phone == null ? "définir votre numéro de téléphone":"Changer De Numéro"}
        navigation={navigation}
        headerHeight={70}
        //headerIcon={""}
      >
        <FilterCountry 
          select={number.country_id} 
          setSelect={(select)=>{
            setNumber({...number,country_id:select?.selectedList[0]?._id})
            
          }}
        />
        {authData.user.phone != null &&

          <TextInput 
            placeholder="ancien numéro de téléphone"  
            keyboardType="numeric"
            onChange={(value)=>setNumber({...number,old:value})}
          />
        }
          <TextInput 
            placeholder={authData.user.phone != null ?"nouveau numéro de téléphone":"numéro de téléphone"}  
            keyboardType="numeric"
            onChange={(value)=>setNumber({...number,new:value})}
          />
          <View style={{marginTop:SIZES.padding,...styles.center}}>
              <TextButton 
                  label={ loading == true ? 'Réinitialisation en cours...' : 'Réinitialiser'}
                  labelStyle={{color:COLORS.white}}
                  buttonStyle={{
                    width:SIZES.width*0.9,
                    height:50,
                    backgroundColor:phoneResetEnable()? COLORS.primary2 : COLORS.lightGreen,
                    //borderRadius:20
                  }}
                  disabled={phoneResetEnable() ? false:true}
                  onPress={()=>phoneResetEnable()?updatePhone():""}
              />
          </View>
    </Starter>
  </ScrollView>
  </SafeAreaView>
  );
}
export default CertifyProfilePhoneScreen;
