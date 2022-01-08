import React from 'react';
import {Image, Text, View} from "react-native";
import {theme} from "../../../../core/theme";

function ItemCardPartenaires(props) {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 10,
            width: '100%',
            flexDirection: 'row'
        }}>
            <View style={{flex: 1, width: '40%'}}>
                <Image source={require('../../../../assets/adaptive-icon.png')} style={{height: 100, width: 100}}/>
            </View>
            <View style={{flex: 2, width: '40%', marginLeft: 40}}>
                <Text style={{color: theme.colors.text, fontWeight: 'bold', fontSize: 22, marginBottom: 5}}>
                    Carrefour
                </Text>
                <Text style={{color: theme.colors.disabled}}>
                    Faite vos course chez carrefour et payer avec paiecash
                </Text>
                <Text style={{color: theme.colors.primary, fontWeight: 'bold', marginTop: 5}}>
                    Code promo: 2500-50
                </Text>
            </View>
        </View>
    );
}

export default ItemCardPartenaires;