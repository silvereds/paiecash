import React from 'react'
import {View , Text , TextInput ,StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const BlockInput = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    defaultValue
})=>{
    return(
        <View style={{...containerStyle}}>
            <View style={styles.spaceBetween}>
                <Text style={styles.label}> {label} </Text>
                
            </View>
            {errorMsg !="" && <Text style={styles.errorMsg}> {errorMsg} </Text>}
            <View style={styles.FormInput}>
                {prependComponent}
                <TextInput 
                    style={{flex:1,...inputStyle}}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCompleteType={autoCompleteType}
                    onChangeText={(text)=>onChange(text)}
                    defaultValue={defaultValue}
                />
                {appendComponent}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    spaceBetween:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    label:{
       // color:COLORS.gray,
        ...FONTS.h3
    },
    errorMsg:{
        color:COLORS.red,
        textAlign:'center',
        ...FONTS.body4
    },
    FormInput:{
        flexDirection:'row',
        height:50,
        paddingHorizontal:SIZES.base,
        marginTop:SIZES.base,
       // borderRadius:SIZES.radius,
        //backgroundColor:COLORS.lightGray1,
        borderBottomWidth:1,
        borderBottomColor:COLORS.lightGray1
        
    }
})
export default BlockInput