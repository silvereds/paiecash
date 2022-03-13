import React from "react";
import { View,Text,TouchableOpacity,ScrollView,SafeAreaView} from "react-native";

import { FONTS,COLORS, SIZES } from "../../../../../constants";
import CertifyLayout from '../../Components/CertifyLayout';
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from "../../ProfileStyle";
import Action from "../../Components/Action";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DATA from "../../../../../constants/ListServices";

const CustomItem = ({label,onPress,customStyle,icon_name}) =>{
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 60,
                width: SIZES.width*0.9,
                shadowColor: "#000",
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.5,
                shadowRadius: 1,
                elevation: 2,
                backgroundColor: COLORS.white,
                borderRadius:10,
                marginTop:5,
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                paddingHorizontal:SIZES.base,
                ...FONTS.h2
            }}
           
        >
        
            <Icon name={icon_name} size={20} color={COLORS.darkGray}/>
            <Text style={{color:COLORS.primary2 ,textAlign:'right', ...FONTS.body4}}> {label}  </Text>
            
        </TouchableOpacity>
    )
}
const CertifyOptionListScreen = ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={{backgroundColor:"#fff"}}>
            <CertifyLayout
                title={"Mise à Jour du Profile"}
                subtitle=""
                navigation={navigation}
            >
                <View style={{backgroundColor:"#fff",alignItems:'center',alignItems:'center'}}>
                    <Action
                        title="Informations Personnelles"
                        Icon={<Icon name="user-tag" size={20} color={COLORS.primary2}/>}
                        onPress={()=>navigation.navigate("Tnformations Personnelles")}
                        
                    />
                    <Action
                        title="Numéro de Téléphone"
                        Icon={<Icon name="tablet" size={20} color={COLORS.primary2}/>}
                        onPress={()=>navigation.navigate("Telephone")}
                        
                    />
                    <Action 
                        title="Changer Le Mot De Passe" 
                        onPress={()=>navigation.navigate("Modifier Le  Mot de Passe")}
                        Icon={<Icon name="venus" size={20} color={COLORS.primary2} />}
                    />
                    {
                        DATA.map((item ,index)=>(
                            <Action
                                index={index}
                                title={item.title} 
                                onPress={""}
                                Icon={<MaterialCommunityIcons name={item.icon} color={COLORS.primary2} size={20} />}
                            />

                            
                        ))

                    }
                    
                </View>
            </CertifyLayout>
        </ScrollView>
        </SafeAreaView>
    )
}
export default CertifyOptionListScreen