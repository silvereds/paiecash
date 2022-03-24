import React, { useState } from "react";
import { TouchableOpacity, Text, View , ScrollView } from "react-native";
import Modal from "react-native-modal";
import { COLORS, FONTS, SIZES } from "../../constants";
import BlockInput from "../TextInput/BlockInput";

const  FormModal = ({visible,setVisible})=>{

  return (
    <View style={{ flex: 1}}>

      <Modal 
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        style={{margin:0,marginTop:200}}
        propagateSwipe={true}
        animationIn="slideInUp"
    >
        
            <View 
                style={{ 
                    flex: 1,
                    height:SIZES.height*0.8,
                    backgroundColor:"#fff",
                    borderTopStartRadius:50,
                    borderTopEndRadius:50,
                    justifyContent:'center',
                    paddingHorizontal:SIZES.padding,
                    alignItems:'center'
                }}
            >
            <ScrollView showsVerticalScrollIndicator={false}>
            <BlockInput
                label="nom de l'entreprise"
                //autoCompleteType="password"
                onChange={()=>{}}
                errorMsg={""}
                //secureTextEntry={false}
                appendComponent={<></>}
                prependComponent={<></>}
                containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8,marginTop:50}}
            />
            <BlockInput
                label="Abreviation"
                //autoCompleteType="password"
                onChange={()=>{}}
                errorMsg={""}
                //secureTextEntry={false}
                appendComponent={<></>}
                prependComponent={<></>}
                containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
            />
            <BlockInput
                label="Email"
                autoCompleteType="mail"
                onChange={()=>{}}
                errorMsg={""}
                //secureTextEntry={false}
                appendComponent={<></>}
                prependComponent={<></>}
                containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
            />
            <BlockInput
                label="Téléphone"
                autoCompleteType="number"
                onChange={()=>{}}
                errorMsg={""}
                //secureTextEntry={false}
                keyboardType="numeric"
                appendComponent={<></>}
                prependComponent={<></>}
                containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
            />
            <BlockInput
                label="Ville"
                //autoCompleteType="number"
                onChange={()=>{}}
                errorMsg={""}
                //secureTextEntry={false}
                keyboardType="numeric"
                appendComponent={<></>}
                prependComponent={<></>}
                containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
            />
            <BlockInput
                label="Description"
                autoCompleteType="number"
                onChange={()=>{}}
                errorMsg={""}
                //secureTextEntry={false}
                keyboardType="numeric"
                appendComponent={<></>}
                prependComponent={<></>}
                containerStyle={{marginTop:SIZES.radius,width:SIZES.width*0.8}}
            />
          <TouchableOpacity 
            onPress={()=>setVisible(!visible)} 
            style={{
                marginTop:SIZES.padding,
                width:SIZES.width*0.8,
                height:50,
                alignItems:'center',
                justifyContent:'center',
                marginBottom:SIZES.padding,
                backgroundColor:COLORS.primary2
            }}
            >
              <Text style={{color:"#fff",...FONTS.h2}}>Créer Maintenant </Text>
          </TouchableOpacity>
          </ScrollView>
          </View>
        
      </Modal>
    </View>
  );
}

export default FormModal;  