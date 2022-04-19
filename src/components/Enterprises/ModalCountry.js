import React, { useState } from "react";
import { TouchableOpacity, Text, View , ScrollView } from "react-native";
import Modal from "react-native-modal";
import { COLORS, FONTS, SIZES } from "../../constants";
import BlockInput from "../TextInput/BlockInput";



const country = [{name:'france',code:'+50'},{name:'cameroun',code:'+237'},{name:'usa',code:'+33'}]

const  ModalCountry = ({visible,setVisible,setCode})=>{

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
            {
                country.map((item)=>{
                    return(
                        <TouchableOpacity 
                            onPress={()=>{setVisible(!visible),setCode(item.code)}} 
                            style={{
                                marginTop:SIZES.base,
                                width:SIZES.width*0.8,
                                height:30,
                                alignItems:'center',
                                justifyContent:'center',
                                
                                backgroundColor:COLORS.white
                            }}
                            key={item.code}
                            >
                            <Text style={{color:COLORS.darkGray,...FONTS.h4}}> {item.name} </Text>
                        </TouchableOpacity>
                    )
                })
            }
                
          </ScrollView>
          </View>
        
      </Modal>
    </View>
  );
}

export default ModalCountry;  