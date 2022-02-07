import React from 'react';
import {Image, Text, View} from "react-native";
import styles from './ItemCardPartenairesStyle';

function ItemCardPartenaires(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image source={require('../../../../../assets/adaptive-icon.png')} style={styles.image}/>
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>
                    Carrefour
                </Text>
                <Text style={styles.textDisabled}>
                    Faite vos course chez carrefour et payer avec paiecash
                </Text>
                <Text style={styles.codePromo}>
                    Code promo: 2500-50
                </Text>
            </View>
        </View>
    );
}



export default ItemCardPartenaires;