import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

import styles from './../HomeTabScreens/HomeTabStyle';
import {theme} from '../../../../core/theme';
import AuthentificationContext from '../../../../context/AuthentificationContext';

import Toast from 'react-native-toast-message';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import SkeletonWidgets from './../HomeTabScreens/SkeletonWidgets';
import ModalCountry from '../../../../components/Enterprises/ModalCountry';

import { FONTS,COLORS, SIZES } from "../../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInput from '../../../../components/TextInput';
import QrCodeScan from '../../../../components/QrCode';

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 * @author silvere Tchoffo Djousse <tchofsilvere@gmail.com>
 */
export default function PaymentScreens({navigation}) {
  const {authData} = useContext(AuthentificationContext);
  const [scan,setScan]=React.useState(false)
  const [showInput,setShowInput]=React.useState(false)
  const [data,setData]=React.useState('')
  const [country,setCountry]=React.useState({'code':'+50','pays':'france'})
  const [loading, setLoading] = useState(false)
  const [visible,setVisible] = React.useState(false)


  // useEffect(() => {
  //   if(loading){
  //     setTimeout(function() {
  //       setLoading(false)
  //     }, 3000)
  //   }
  // }, [loading])
  function setCode(code){
    setCountry({...country,code:code})
  }
  function getInfo(data){
    setScan(false);
    setData(data)
  }
  return (
    <SafeAreaView style={styles.container}>
      <SkeletonContent containerStyle={{flex: 1, width: '100%'}} isLoading={loading} layout={SkeletonWidgets}>
        <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,paddingVertical:20}}>
                <Image source={require('./../../../../assets/etoo.jpg')} style={{height:80,width:80,borderRadius:40 }}/>
                <Text>
                    {authData.user?.lastName}
                </Text>
            </View>
          <View 
            style={{
                
                width:SIZES.width,
                height:SIZES.height*0.5,
                paddingHorizontal:SIZES.base
            }}
          >
                
            <View 
              style={{
                paddingBottom:10,
                //width:SIZES.width*0.98,
                height:SIZES.height*0.5,
                alignItems:'center',
                
                hoverflow:'hidden'
                
              }} 
            >
              {
                scan
                ?
                (<QrCodeScan reactivate={data.scan} setData={setData} data={data} setScan={setScan}/>)
                :
                (data==''?
                (<Image source={require('./../../../../assets/scan.png')} resizeMode='contain' />)
                :(
                    <View style={{justifyContent:'center',alignItems:'center', height:SIZES.height*0.5,width:SIZES.width}}>
                      <View style={{padding:SIZES.base,backgroundColor:'#fffdfd4a',marginVertical:SIZES.base}}>
                        
                        <Text style={{color:COLORS.black,...FONTS.body4 , textAlign:'center'}}>
                          Vous êtes sur le point d'effecteur un payement d'une facture A <Text style={{color:COLORS.primary2,...FONTS.h3}}> Tchoffo Djousse Silvere  </Text> via
                          votre carte paiecash.
                        </Text>
                        
                      </View>
                      <View style={{paddingVertical:SIZES.padding}}>
                        <TextInput 
                            style={{width:SIZES.width*0.9,fontSize:12,height:50}}
                            placeholder="veuillez saisir le montant de la facture"
                            placeholderTextColor={COLORS.gray}
                            keyboardType='numeric'
                            //onChangeText={(text)=>onChange(text)}
                            //defaultValue={defaultValue}
                        /> 
                        <TextInput 
                            style={{width:SIZES.width*0.9,fontSize:12,marginTop:SIZES.base,height:50}}
                            placeholder="mot de passe"
                            placeholderTextColor={COLORS.gray}
                            secureTextEntry
                            onChangeText={(text)=>onChange(text)}
                            defaultValue={''}
                        />
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity
                              onPress={() =>setShowInput(true)}
                              style={{paddingVertical:10,alignItems:'center',justifyContent:'center',width:SIZES.width*0.4,backgroundColor:COLORS.primary2,marginTop:10}}
                            >
                              <Text style={{textAlign:'center',color:COLORS.white,...FONTS.h3}}>
                                valider
                              </Text>
                              
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() =>{setScan(false),setData('')}}
                              style={{paddingVertical:10,alignItems:'center',justifyContent:'center',width:SIZES.width*0.4,backgroundColor:COLORS.primary2,marginTop:10}}
                            >
                              <Text style={{textAlign:'center',color:COLORS.white,...FONTS.h3}}>
                                Annuler
                              </Text>
                            </TouchableOpacity>
                        </View>
                      </View>
                      {/* <View>
                        <Text>
                          {data}
                        </Text>
                      </View> */}
                    </View>
                  )
                 )
              }
            </View>
              
            
          </View>
          <View>

            <View style={{paddingVertical:SIZES.padding,justifyContent:'center',alignItems:'center'}}>
              <View style={{padding:SIZES.base,backgroundColor:'#fffdfd4a',marginVertical:SIZES.base}}>
                <Text style={{color:COLORS.black,...FONTS.h2,textAlign:'center'}}>Payement Par QR Code  </Text>
                <Text style={{color:COLORS.black,...FONTS.body4 , textAlign:'center'}}>Placer votre appareil mobile au dessus du QR Code et cliquer sur  Scannez-le</Text>
              </View>
              <TouchableOpacity
                onPress={() =>setScan(!scan)} 
                style={styles.boutton_abonnement}
              >
                <Text style={{textAlign:'center',color:COLORS.white2,...FONTS.h3}}>
                  {scan ? 'Annuler...':'Scanner'}
                </Text>
              </TouchableOpacity>
              <View style={{padding:SIZES.base,backgroundColor:'#fffdfd4a',marginVertical:SIZES.base}}>
                <Text style={{color:COLORS.black,...FONTS.h2,textAlign:'center'}}>Autre méthode de payement</Text>
                <TouchableOpacity
                  onPress={() =>setShowInput(true)}
                  style={{paddingVertical:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}
                >
                  <Icon name='tablet-alt' size={20}/>
                  <Text style={{textAlign:'center',color:COLORS.primary2,...FONTS.h3,paddingLeft:SIZES.padding}}>
                    Numéro de Télephone 
                  </Text>
                  
                </TouchableOpacity>
                {
                    showInput &&  <View style={{flexDirection:'row',width:SIZES.width*0.95}}> 
                                    <TouchableOpacity
                                      onPress={()=>setVisible(!visible)}
                                      style={{paddingVertical:10,alignItems:'center',justifyContent:'center',width:SIZES.width*0.2}}
                                    >
                                      <Text style={{textAlign:'center',color:COLORS.primary2,...FONTS.h3}}>
                                        {country.code}
                                      </Text>
                                      
                                    </TouchableOpacity>
                                    <TextInput 
                                        style={{flex:1,width:SIZES.width*0.75,height:50}}
                                        placeholder="Téléphone du destinataire"
                                        placeholderTextColor={COLORS.gray}
                                        //onChangeText={(text)=>onChange(text)}
                                        //defaultValue={defaultValue}
                                    />  
                                  </View>

                }
                
              </View>
              <ModalCountry visible={visible} setVisible={setVisible} setCode={setCode}/>
            </View>
          </View>
        </ScrollView>

      </SkeletonContent>
    </SafeAreaView>
  );
}
