import React, {useContext, useEffect, useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

import styles from './HomeTabStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../../core/theme';
import projectState from '../../../../helpers/projectState';
import tasksState from '../../../../helpers/taskState';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import Partenaires from '../components/Partenaires';
import Toast from 'react-native-toast-message';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import SkeletonWidgets from './SkeletonWidgets';
import mainServices from '../../../../constants/MainServices';
import { FONTS,COLORS, SIZES } from "../../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DATA } from '../../../../constants';
import ServicesButton from '../../../../components/Button/ServiceButton';

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HomeTabScreens({navigation}) {
  const {authData} = useContext(AuthentificationContext);
  const project = projectState.projects[2];
  const tasks = tasksState.tasks;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(loading){
      setTimeout(function() {
        setLoading(false)
      }, 3000)
    }
  }, [loading])

  return (
    <SafeAreaView style={styles.container}>
      <SkeletonContent
        containerStyle={{flex: 1, width: '100%'}}
        isLoading={loading}
        layout={SkeletonWidgets}>
        <ScrollView>
        <ImageBackground source={require('./../../../../assets/bg4.png')}>
          <View style={{paddingBottom:80/*,backgroundColor:COLORS.primary2*/}} >
            
              <View style={{flexDirection:'row',paddingHorizontal:SIZES.base,marginTop:SIZES.base}}>
                <Image source={require('./../../../../assets/parisfc.jpg')} style={{height:50,width:50,borderRadius:25}}/>
                <View style={{justifyContent:'flex-start',alignItems:'center',justifyContent:'center',paddingHorizontal:SIZES.padding}} >
                    <Text style={{color:COLORS.white,...FONTS.h3}}>
                      {authData.user?.lastName}
                    </Text>
                    
                </View>
                <View style={{flex:1,alignItems:'center',flexDirection:'row',justifyContent:'flex-end'}}>
                    <Icon name='bell' size={30} color={COLORS.white} style={{marginRight:SIZES.base}}/>
                    
                </View>
                
              </View>
            
              <View style={{alignItems:'center',marginTop:SIZES.base}}>
                <Image source={require('./../../../../assets/partenaire4.png')} resizeMode='stretch'  style={{width:SIZES.width*0.9,height:180,borderRadius:25}}/>
                {/* premiere listes des services */}
                <View style={{flexDirection:'row',width:SIZES.width,paddingHorizontal:SIZES.padding,justifyContent:'space-between'}}>
                      {
                      mainServices.map((item,key)=>{
                        return(
                          <ServicesButton
                            item={item}
                            key={item.id}
                            width={(SIZES.width-SIZES.padding)/3.5}
                            height={100}
                            onPress={()=>{}}
                            icon={<Icon name={item.image} size={30} color={COLORS.lightGreen}/>}
                          />
                        )
                      })
                      }
                </View>
                
              </View>
          </View>
          
        </ImageBackground>
        
          <View style={{backgroundColor:theme.colors.background,marginTop:-40,borderTopEndRadius:40,borderTopStartRadius:40}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:SIZES.padding}}>
                {
                DATA.map((item,key)=>{
                  return(
                    <ServicesButton
                      item={item}
                      key={item.id}
                      icon={<Icon name={item.icon} size={30} color={COLORS.lightGreen}/>}
                      height={100}
                      width={(SIZES.width-SIZES.padding)/3.5}
                      onPress={()=>{}}
                    />
                  )
                })
                }
            </View>

            {/** bouton d 'abonnement  */}
            <View style={{paddingVertical:SIZES.padding,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity
                onPress={() =>
                  Toast.show({
                    type: 'info',
                    text1: 'Vous devez remplir vos informations avant',
                  })
                }
                style={styles.boutton_abonnement}
              >
                <Text style={{textAlign:'center',color:COLORS.white2,...FONTS.h3}}>
                  Choisir un abonnement
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Partenaires />
          <View style={{marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
                <Text style={{...FONTS.h2}}>Transactions récentes</Text>
                <View style={{
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:SIZES.padding,
                  height:200,
                  backgroundColor:theme.colors.white2
                }}>
                  <Text>Aucune Transactions récentes </Text>
                </View>
          </View>
        </ScrollView>

      </SkeletonContent>
    </SafeAreaView>
  );
}
