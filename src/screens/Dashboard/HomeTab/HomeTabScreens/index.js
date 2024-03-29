import React, {useContext, useEffect, useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

import styles from './HomeTabStyle';
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
import { ItemTransaction } from '../../../../components/Transactions';
import TransactionsList from '../../../../constants/Transaction';
import getUser from '../../../../helpers/getUserInfo';
/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 * @author silvere Tchoffo Djousse <tchofsilvere@gmail.com>
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
   // console.log(getUser())
  }, [loading])

  function showToast(){
    Toast.show({
      type: 'info',
      text1: 'module indisponible pour le moment',
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <SkeletonContent containerStyle={{flex: 1, width: '100%'}} isLoading={loading} layout={SkeletonWidgets}>
        <ScrollView>
          <ImageBackground 
            source={require('./../../../../assets/bg4.png')} 
            style={{
            width:SIZES.width,
            height:SIZES.height*0.5,
            paddingHorizontal:SIZES.base
            }}
          >
            <View style={{paddingBottom:10}}>          
              <View style={{flexDirection:'row',paddingHorizontal:SIZES.base,marginTop:SIZES.base,height:60,justifyContent:'space-evenly',alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',alignItems:'center',justifyContent:'center',paddingHorizontal:SIZES.padding}} >
                    
                </View>
                <View style={{flex:1,alignItems:'center',flexDirection:'row',justifyContent:'flex-end'}}>
                    <Icon name='bell' size={30} color={COLORS.white2} style={{marginRight:SIZES.base}}/> 
                    <Text style={{color:COLORS.white2,...FONTS.h3}}>
                      {authData.user?.lastName}
                    </Text>
                </View>
              </View>
              
              <View style={{alignItems:'center'}}>
                
                <View 
                  style={{
                    width:SIZES.width*0.98,
                    height:SIZES.height*0.35,
                    alignItems:'center'
                    
                  }} 
                >
            
                    <View style={{flexDirection:'row',height:60,alignItems:'center',justifyContent:'space-between',width:'90%'}}>
                      <View style={{flexDirection:'row',height:60,alignItems:'center'}}>
                        <Image source={require('./../../../../assets/logo-blanc.png')} style={{height:50,width:50,borderRadius:25 }}/>
                        
                      </View>
                      <Image source={require('./../../../../assets/masterCard.png')} style={{height:40,width:90 }} resizeMode='contain'/>
                    </View>
                    <View style={{height:(SIZES.height*0.35-100),flexDirection:'row',width:'90%'}}>
                      <View style={{justifyContent:'center',alignItems:'flex-start',justifyContent:'flex-end'}}>
                        {/* <Text style={{color:"#fff",...FONTS.h2}}> {authData.user?.firstName} </Text> */}
                        {/* <Text style={{color:"#fff",...FONTS.h4}}> {authData.user?.lastName} </Text> */}
                        <Text style={{color:"#fff",...FONTS.h2}}> Aucuns Abonnements</Text>
                        <Text style={{color:"#fff",...FONTS.h4}}> vous avez la possibilité de vous abonner maintenant et obtenir une carte Paiecash </Text>
                      </View>
                    </View>
                  
                  
                </View>
              </View>
            </View> 
          </ImageBackground>
          <View style={{backgroundColor:theme.colors.background,marginTop:-30,borderTopEndRadius:40,borderTopStartRadius:40}}>

            <View style={{paddingVertical:SIZES.padding,justifyContent:'center',alignItems:'center'}}>
              <View style={{padding:SIZES.base,backgroundColor:'#fffdfd4a',marginVertical:SIZES.base}}>
                <Text style={{color:COLORS.black,...FONTS.h2}}>Obtenez une carte Paiecash  </Text>
                <Text style={{color:COLORS.black,...FONTS.body4}}>il suffit de  choisir un abonnement</Text>
              </View>
              <TouchableOpacity
                onPress={() =>navigation.navigate('BuyCard')}
                style={styles.boutton_abonnement}
              >
                <Text style={{textAlign:'center',color:COLORS.white2,...FONTS.h3}}>
                  Acheter une Carte
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',width:SIZES.width,paddingHorizontal:SIZES.base,justifyContent:'space-between'}}>
                  {
                  mainServices.map((item,key)=>{
                    return(
                      <View key={key}>
                        <ServicesButton
                          item={item}
                          width={(SIZES.width-SIZES.padding)/4}
                          height={100}
                          onPress={()=>navigation.navigate('payment')}
                          icon={<Icon name={item.image} size={30} color={COLORS.lightGreen}/>}
                        />
                      </View>
                    )
                  })
                  }
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:SIZES.base}}>
                {
                DATA.map((item,key)=>{
                  return(
                    <View key={key}>
                    <ServicesButton
                      item={item}
                      icon={<Icon name={item.icon} size={30} color={COLORS.lightGreen}/>}
                      height={100}
                      width={(SIZES.width-SIZES.padding)/4}
                      onPress={()=>showToast()}
                    />
                    </View>
                  )
                })
                }
            </View>
          </View>
          <Partenaires navigation={navigation} />
          <View style={{marginTop:SIZES.padding,paddingHorizontal:SIZES.base}}>
                <Text style={{color:COLORS.black , ...FONTS.h3}}>Transactions récentes</Text>
                {
                  TransactionsList.map((item,key)=>{
                    return(
                      <View style={{backgroundColor:"#fff",alignItems:'center'}} key={key}>
                          <ItemTransaction 
                          title={item.title}
                          subtitle={item.subtitle}
                          image={item.image}
                          price={item.price}
                        />
                      </View>
                    )
                  })
                }
          </View>
        </ScrollView>

      </SkeletonContent>
    </SafeAreaView>
  );
}
