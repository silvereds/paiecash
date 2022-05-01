import React, { useState ,useEffect } from 'react';
import { View, Text, ScrollView,TouchableOpacity ,StyleSheet} from 'react-native';
import useFetchApi from '../../../../../helpers/fetchApi/useFetchApi';
import styles from '../../ProfileStyle';
import {COLORS,FONTS , SIZES} from './../../../../../constants'
import Starter from '../../../../../components/Layout/Starter';
import {passwordValidator} from '../../../../../helpers/validators/passwordValidator'
import {APPENV} from "../../../../../core/config";
import BlockInput from '../../../../../components/TextInput/BlockInput';
import Icon from "react-native-vector-icons/Feather"
import { SafeAreaView } from 'react-native-safe-area-context';
import TextButton from '../../../../../components/Button/TextButton';
import Toast from 'react-native-toast-message';
import getUser from "../../../../../helpers/getUserInfo";
const  CertifyProfilePwdScreen = ({navigation})=>{

  const [authData,setAuthData] = React.useState({})
  useEffect(()=>{
      getUser(setAuthData)     
  },[authData])

  const {
    data:pwdResponse,
    loading,
    postData,
    status,
    error
  } = useFetchApi(APPENV.domain + '/api/profile/account/change-password')
  
  const [old_password,setOlPassword] = React.useState({value:'',error:'',show:false})
  const [new_password,setNewPassword] = React.useState({value:'',error:'',show:false})
  const [new_confirm_password,setNewConfirmPassword] = React.useState({value:'',error:'',show:false})
  
  React.useEffect(() => {
    if (status >= 400 && status <= 600) {
        Toast.show({
            type: 'error',
            text1: 'Erreur ',
            text2: error.message
        });
        
    }else{ 
      pwdResponse.message == "Password change" 
        ?
        (
          Toast.show({
            type: 'info',
            text1: pwdResponse.message,
          }),
          setAuthData({...authData,passwordDefined:true})
        )
        : 
        ''
    }
  }, [status,pwdResponse,error])

  function changePwdIsEnable(){

    if(authData?.passwordDefined){
      return  (old_password.value != '' && old_password.error == '')
              &&
              (new_password.error =='' && new_password.value !='') 
              && 
              (new_confirm_password.error =='' && new_confirm_password.value !='')
              && 
              loading!=true
    }else{
      return  (new_password.error =='' && new_password.value !='') 
              && 
              (new_confirm_password.error =='' && new_confirm_password.value !='')
              && 
              loading!=true
    }
  }

  function changePwd(){
    new_confirm_password.value == new_password.value ?
    postData({
      old_password:old_password.value.length != 0 ? old_password.value:'',
      new_password:new_password.value,
      new_password_confirm: new_confirm_password.value,
      // api_key:APPENV.apiKey,
      // access_token:token
    }):Toast.show({type:'error',text1:"les mots de passe saisie ne sont pas identiques "})
  }

  return (
   
    <SafeAreaView style={styles.container}>
      
      <ScrollView style={{backgroundColor:"#fff"}} >
        <Starter
          subtitle="manager votre mot de passe"
          //title={}
          navigation={navigation}
          headerHeight={50}
          //headerIcon={<FontAweSome5  name='authData-circle' size={70} color={COLORS.white}/>}
        >
          {authData?.passwordDefined &&
              <BlockInput
                  label="ancien mot de passe"
                  autoCompleteType="password"
                  onChange={(value)=>{setOlPassword({...old_password,value:value})}}
                  errorMsg={old_password.error}
                  secureTextEntry={!old_password.show}
                  appendComponent={
                      <TouchableOpacity 
                          style={[styles.center,{width:50}]}
                          onPress={()=>setOlPassword({...old_password,show:!old_password.show})}
                      >
                          <Icon name={old_password.show ? "eye-off":"eye"} size={20} color={COLORS.lightGreen}/>
                      </TouchableOpacity>
                  }
                  prependComponent={<></>}
                  containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
              />
          }
          <BlockInput
              label="mot de passe"
              autoCompleteType="password"
              onChange={(value)=>{setNewPassword({...new_password,value:value,error:passwordValidator(value)})}}
              errorMsg={new_password.error}
              secureTextEntry={!new_password.show}
              appendComponent={
                  <TouchableOpacity 
                  style={[styles.center,{width:50}]}
                      onPress={()=>{setNewPassword({...new_password,show:!new_password.show})}}
                  >
                      <Icon name={new_password.show ? "eye-off":"eye"} size={20} color={COLORS.lightGreen}/>
                  </TouchableOpacity>
              }
              prependComponent={<></>}
              containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
          />
          <BlockInput
              label="confirmez le  mot de passe"
              autoCompleteType="password"
              onChange={(value)=>{setNewConfirmPassword({...new_confirm_password,value:value,error:passwordValidator(value)})}} 
              errorMsg={new_confirm_password.error}
              secureTextEntry={!new_confirm_password.show}
              appendComponent={
                  <TouchableOpacity 
                      style={[styles.center,{width:50}]}
                      onPress={()=>setNewConfirmPassword({...new_confirm_password,show:!new_confirm_password.show})}
                  >
                      <Icon name={new_confirm_password.show ? "eye-off":"eye"} size={20} color={COLORS.lightGreen}/>
                  </TouchableOpacity>
              }
              prependComponent={<></>}
              containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
            />
          <View style={{marginTop:SIZES.padding,...styles.center}}>
            <TextButton
              label={loading === true ? 'requete en cour...' : 'envoyé'}
              labelStyle={{color:COLORS.white}}
              buttonStyle={{
                width:SIZES.width*0.8,
                height:50,
                backgroundColor:changePwdIsEnable()?COLORS.primary2:COLORS.lightGreen,
                
              }}
              disabled={changePwdIsEnable()?false:true}
              onPress={()=>changePwdIsEnable()?changePwd():""}
            />
          </View>
      </Starter>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CertifyProfilePwdScreen;
