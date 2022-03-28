import React from "react";
import { View , Text} from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";
import ProducList from "./ProductList";
import Products from "../DummyData/Data";

const Store = ()=>{
    return(
    
        <View style={{marginTop:50 , width:SIZES.width,backgroundColor:'#fff'}}>
            <View 
                style={{
                alignItems:'flex-start',
                justifyContent:'flex-start'
                }}
            >
                <Text 
                    style={{
                        color:COLORS.darkGray,
                        ...FONTS.h2,
                        paddingHorizontal:SIZES.base
                    }}>
                    Arrivages
                </Text>
            </View>
            <ProducList product={Products.Arrivages}/>
            <View 
                style={{
                    alignItems:'flex-start',
                    justifyContent:'flex-start',
                    marginTop:20
                    }}
            >
                <Text 
                    style={{
                        color:COLORS.darkGray,
                        ...FONTS.h2,
                        paddingHorizontal:SIZES.base
                    }}>
                    Top Sales
                </Text>
            </View>
            <ProducList product={Products.TopSales}/>
        </View>
    )
}
export default Store