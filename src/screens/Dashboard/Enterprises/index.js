import React, {useState, useEffect, useContext, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Toast from 'react-native-toast-message';
import {APPENV} from '../../../core/config';
import useFetchApi from '../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../context/AuthentificationContext';
import styles from '../../../constants/styles'
import { TabScreenHeader } from '../../../components/TabScreenHeader';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import Entreprises from '../../../constants/Enterprises';
import CardHeader from '../../../components/Enterprises/CardHeader';
import { COLORS, FONTS, SIZES } from '../../../constants';
import  Icon from 'react-native-vector-icons/FontAwesome5'
import FormModal from '../../../components/Enterprises/FormModal';
import { FlatList } from 'react-native-gesture-handler';
import ProducList from './ProductList';
const  HeaderButton = ({text})=>(
  < TouchableOpacity
          style={{
              height:50,
              backgroundColor:COLORS.lightGray,
              padding:SIZES.base,
              
          }}
      >
          <Text>
              {text}
          </Text>
      </TouchableOpacity>
)

const  EnterpriseList = (props)=>{
  const {authData,setAuthData} = useContext(AuthentificationContext);
  const [visible,setVisible] = React.useState(false)
  const {
    data: dataCards,
    loading,
    searchData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/card/list');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Entreprise</Text>}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <SkeletonContent
        containerStyle={{flex: 1, width: '100%',backgroundColor:'#fff'}}
        isLoading={loading}
        layout={Entreprises}>
        <ScrollView showsVerticalScrollIndicator={false} >
          
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:COLORS.lightGray,padding:SIZES.padding}}>
              <CardHeader
                title={authData.user.firstName}
                subtitle={authData.user.lastName}
                size={50}
                containerStyle={{marginTop:20}}
                titleStyle={{color:COLORS.darkGray,...FONTS.h2}}
              />
              
              <TouchableOpacity
                style={{
                  alignItems:'center',
                  backgroundColor:COLORS.primary2,
                  justifyContent:'center',
                  padding:SIZES.radius,
                  shadowColor: "#000",
                  shadowOffset: {width: 1, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 10,
                  borderRadius:70,
                }}
                onPress={()=>setVisible(!visible)}
              >
                <Icon name="plus" size={20} color={COLORS.white}></Icon>
                <Text style={{color:COLORS.white,...FONTS.body3}}>créer une Entreprise</Text>
              </TouchableOpacity>
              
            </View>
            <View style={{paddingHorizontal:SIZES.base}}>
            <FlatList
                //horizontal
                data={Entreprises}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item,index})=>{
                    return(
                      <View>
                        <View>
                          <CardHeader
                            title={item.title}
                            subtitle={item.abreviation}
                            size={50}
                            image={require('./../../../assets/user.png')}
                            containerStyle={{marginTop:20}}
                            titleStyle={{color:COLORS.black,...FONTS.h3}}
                          />
                        </View>
                        <View 
                          style={{  
                            justifyContent:'center',
                            alignItems:'center',
                            paddingVertical:SIZES.base,

                          }}
                        >
                          <Text >
                            {item.description}
                          </Text>
                        </View>
                        <View 
                          style={{ 
                            flex: 1, 
                            flexDirection: 'row', 
                            //paddingHorizontal: SIZES.padding,
                             alignItems: 'center' 
                          }}
                        >
                            <HeaderButton text="sport"/>
                            <HeaderButton text="électroniques"/>
                            <HeaderButton text="t-shirt"/>
                            <HeaderButton text="voiture"/>
                        </View>
                        
                        <ProducList product={item.product}/>
                      
                      
                      </View>
                    )
                }}
            />
            </View>
            
            
        </ScrollView>
            
      </SkeletonContent>
      
    </SafeAreaView>
  );
}

export default EnterpriseList;
