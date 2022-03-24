import React from "react";
import { View,Text,TouchableOpacity,ScrollView,SafeAreaView, Image} from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import { FONTS,COLORS, SIZES } from "../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Toast from 'react-native-toast-message';
import AuthentificationContext from "../../../context/AuthentificationContext";
import TextIconButton from "../../../components/Button/TextIconButton";
import ProfileActionButton from "../../../components/Button/ProfileAction";
import useAsyncData from '../../../services/DataStorage/UseAsyncData';

const ProfileHomeScreen = ({navigation})=>{
    
    const {authData,setAuthData} = React.useContext(AuthentificationContext)
    const {data, removeStorage} = useAsyncData('data');
    console.log(authData.user)
    function logoutAction() {
        setAuthData({});
        removeStorage()
        navigation.navigate('StartScreen');
    }
    return(
        <SafeAreaView >
        <ScrollView style={{backgroundColor:"#fff"}}>
            <View 
                style={{
                    height:250,
                    backgroundColor:COLORS.primary2,
                    borderBottomStartRadius:90,
                    paddingTop:SIZES.padding,
                    paddingHorizontal:SIZES.base
                }}
            >
                <View style={{justifyContent:'flex-end',flexDirection:'row',marginBottom:SIZES.padding}}>
                    <ProgressCircle
                        percent={authData.user?.percentCertification}
                        radius={30}
                        borderWidth={10}
                        color={COLORS.lightOrange}
                        shadowColor="#fff"
                        bgColor={COLORS.darkBlue}>
                        <Text style={{color:COLORS.white,...FONTS.h3}}>{authData.user?.percentCertification}%</Text>
                    </ProgressCircle>
                </View>
                
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingHorizontal:SIZES.padding}}>
                    <Image source={require('../../../assets/ballon.jpg')} style={{height:90,width:90,borderRadius:45}}/>
                    <View style={{paddingHorizontal:SIZES.base}}>
                        <Text style={{color:COLORS.white,...FONTS.h2}}> {authData.user?.firstName} </Text>
                        <Text style={{color:COLORS.lightGreen,...FONTS.body3}}> {authData.user?.lastName} </Text>
                        <Text style={{color:COLORS.lightGreen,...FONTS.body3}}> {authData.user?.email} </Text>
                    </View>
                    
                </View>
                
            </View>
            <View style={{backgroundColor:COLORS.primary2}}>
                
                <View style={{backgroundColor:"#fff",alignItems:'center',borderTopEndRadius:90}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor:COLORS.darkBlue,
                            justifyContent:'center',
                            alignItems:'center',
                            width:SIZES.width*0.5,
                            height:30 + SIZES.padding,
                            borderRadius:(30 + SIZES.padding)*0.5,
                            marginTop:-(30 + SIZES.padding)*0.5,
                            padding:SIZES.base
                        }}
                        onPress={() =>{navigation.navigate('AccountValidation')}}
                    >
                        <Icon name='exclamation-circle' size={20} color={COLORS.lightOrange}/>
                        <Text style={{color:COLORS.lightOrange,...FONTS.body5}}>Vérifier mon compte</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding,justifyContent:'space-evenly'}}>
                        <TextIconButton label={"Abonnements"} Icon={<Icon name="id-card" size={30} color={COLORS.lightGreen} />} onPress={()=>{}}/>
                        <TextIconButton label={"QR code"} Icon={<Icon name="qrcode" size={30} color={COLORS.lightGreen}/>} onPress={()=>{}}/>
                        <TextIconButton label={"Cartes virtuelles"} Icon={<Icon name="money-check" size={30} color={COLORS.lightGreen}/>} onPress={()=>{}}/>
                    </View>
                    <ProfileActionButton 
                        title="Localisation" 
                        subtitle={authData.user?.city == null ? "aucunes informations de localisation": authData.user?.city}
                        onPress={()=>navigation.navigate("LocalisationSettings")}
                        Icon={<Icon name="map-marker-alt" size={30} color={COLORS.lightGreen} />}
                    />
                    <ProfileActionButton
                        title="Profile"
                        subtitle={authData.user?.email}
                        Icon={<Icon name="user-edit" size={30} color={COLORS.lightGreen}/>}
                        onPress={()=>navigation.navigate("Tnformations Personnelles")}
                        
                    />
                    <ProfileActionButton
                        title="Téléphone"
                        subtitle={authData.user?.phone!=null?authData.user?.phone:"aucun numéro enregistré"}
                        Icon={<Icon name="phone-alt" size={30} color={COLORS.lightGreen}/>}
                        onPress={()=>navigation.navigate("Telephone")}
                        
                    />
                    <ProfileActionButton 
                        title="Mot De Passe" 
                        subtitle="modifier votre mot de passe"
                        onPress={()=>navigation.navigate("Modifier Le  Mot de Passe")}
                        Icon={<Icon name="mars-double" size={30} color={COLORS.lightGreen} />}
                    />
                    <ProfileActionButton 
                        title="Recharge" 
                        subtitle="liste des recharges"
                        onPress={()=>Toast.show({
                            type: 'info',
                            text1: 'module en cours de traitement',
                        })}
                        Icon={<Icon name="hand-holding-water" size={30} color={COLORS.lightGreen} />}
                    />
                    <ProfileActionButton 
                        title="Parainage" 
                        subtitle="liste de vos enfants"
                        onPress={()=>Toast.show({
                            type: 'info',
                            text1: 'module en cours de traitement',
                        })}
                        Icon={<Icon name="child" size={30} color={COLORS.lightGreen} />}
                    />
                    <ProfileActionButton 
                        title="Déconnexion" 
                        subtitle="deconnectez vous"
                        onPress={()=>logoutAction()}
                        Icon={<Icon name="sign-out-alt" size={30} color={COLORS.lightGreen} />}
                    />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}
export default ProfileHomeScreen