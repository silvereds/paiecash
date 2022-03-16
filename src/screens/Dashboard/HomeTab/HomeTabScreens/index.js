import React, {useContext, useEffect, useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

import styles from './HomeTabStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../../core/theme';
import projectState from '../../../../helpers/projectState';
import tasksState from '../../../../helpers/taskState';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import ListService from '../components/ListService';
import Partenaires from '../components/Partenaires';
import Toast from 'react-native-toast-message';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import SkeletonWidgets from './SkeletonWidgets';
import mainServices from '../../../../constants/MainServices';
import { FONTS,COLORS, SIZES } from "../../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DATA } from '../../../../constants';

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
        <ScrollView style={{flex: 1}}>
          <ImageBackground source={require('./../../../../assets/background.jpg')} style={{height:250}}>
            <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding,marginTop:SIZES.padding,justifyContent:'space-between'}}>
              <Image source={require('./../../../../assets/logo-blanc.png')}  style={{tintColor:"#fff",height:50,width:50}}/>
              <View style={{justifyContent:'flex-end',alignItems:'center'}} >
                  <Text style={styles.statusProfileError}>
                    Profile non certifier
                  </Text>
                  <Text style={styles.statusSubscription}>
                    Aucun abonnement
                  </Text>
              </View>
              <ProgressCircle
                    percent={authData.user?.percentCertification}
                    radius={30}
                    borderWidth={10}
                    color={theme.colors.error}
                    shadowColor="#f4f4f4"
                    bgColor="#fff">
                    <Text style={styles.projectProgress}>{authData.user?.percentCertification}%</Text>
              </ProgressCircle>
            </View>
            <View style={{paddingHorizontal:SIZES.padding,marginTop:SIZES.padding,justifyContent:'space-between'}}>
                  <View style={styles.projectTitleWrapper}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="account-alert"
                        size={30}
                        color={theme.colors.textWhite}
                      />
                    </TouchableOpacity>
                    <Text style={styles.projectTitle}>
                      {authData.user?.firstName} {authData.user?.lastName}
                    </Text>
                  </View>
                  <View style={styles.projectTitleWrapper}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="mail"
                        size={30}
                        color={theme.colors.textWhite}
                      />
                    </TouchableOpacity>
                    <Text style={styles.projectTitle}>
                      {authData.user?.email} 
                    </Text>
                  </View>
            </View>
          </ImageBackground>

          <View style={{backgroundColor:theme.colors.background,marginTop:-25,borderTopEndRadius:25,borderTopStartRadius:25}}>

            {/* première liste des services  */}
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:SIZES.padding}}>
                {
                DATA.map((item,key)=>{
                  return(
                    <TouchableOpacity 
                      style={{
                        width:(SIZES.width-SIZES.padding)/3.5,
                        height:100,
                        paddingVertical:SIZES.padding,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLORS.white2,
                        marginTop:10,
                        shadowColor: '#000',
                        shadowOffset: {width: 0.8, height: 2},
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 6,
                        borderRadius:10,

                      }}
                      key={key}
                    >
                      <MaterialCommunityIcons
                                    name={item.icon}
                                    size={40}
                                    color={theme.colors.primary}
                                   
                      />
                      
                      <Text style={{color:COLORS.darkGray,...FONTS.h3}}>
                          {item.title}
                      </Text>
                    </TouchableOpacity>
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
                style={{ 
                  width:SIZES.width*0.9,
                  justifyContent:'center',
                  alignItems:'center',
                  height:50,
                  backgroundColor:COLORS.primary2
                }}
              >
                <Text style={{textAlign:'center',color:COLORS.white2,...FONTS.h3}}>
                  Choisir un abonnement
                </Text>
              </TouchableOpacity>
              </View>


            {/* seconde listes des services */}


            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:SIZES.padding}}>
                {
                mainServices.map((item,key)=>{
                  return(
                    <TouchableOpacity 
                      style={{
                        width:(SIZES.width-SIZES.padding)/3.5,
                        paddingVertical:SIZES.padding,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLORS.white2,
                        //marginTop:-30,
                        shadowColor: '#000',
                        shadowOffset: {width: 0.8, height: 2},
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 5,
                        borderRadius:10,

                      }}
                      key={key}
                    >
                      <Icon name={item.image} size={40} color={COLORS.primary2}/>
                      <Text style={{color:COLORS.darkGray,...FONTS.h3}}>
                          {item.title}
                      </Text>
                    </TouchableOpacity>
                  )
                })
                }
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
          {/*-------------------------------------------------------------------
          <View>
            <ListService styles={styles} />
          </View>
          */}
          
        </ScrollView>

      </SkeletonContent>
    </SafeAreaView>
  );
}
