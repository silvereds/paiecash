import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import shortid from 'shortid';
import styles from './rechargeStyle';
import paymentMethods from '../../../../constants/paymentMethods.json';
import Button from '../../../../components/Button';
import CreditCardDisplay from 'react-native-credit-card-display';
import constructElement from './constructElement';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';

function Recharge({route, navigation}) {
  const {card} = route.params;
  const [activeTab, setActiveTab] = useState(paymentMethods[0]);

  const toggleTab = tab => {
    setActiveTab(tab);
  };

  const isActiveTab = tab => {
    const value = activeTab?.value === tab;
    return value;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <LeftHeaderComponent title="Recharge" navigation={navigation} />}
        isMoreBtnVisible={true}
      />

      <View style={styles.rechargeBody}>
        <View style={styles.rechargeTabs}>
          {paymentMethods?.map(paymentMethod => (
            <TouchableOpacity
              style={[
                styles.methodTab,
                isActiveTab(paymentMethod.value)
                  ? styles.activeMethodTab
                  : null,
              ]}
              onPress={() => toggleTab(paymentMethod)}
              key={shortid.generate()}>
              <Text
                style={[
                  styles.methodTabText,
                  isActiveTab(paymentMethod.value)
                    ? styles.activeMethodTabText
                    : styles.inActiveMethodTabText,
                ]}>
                {paymentMethod.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView style={styles.rechargeContent}>
        
        <View style={styles.fullWidthCenter}>
              <CreditCardDisplay
                style={styles.fullWidth}
                number={card?.credit_card_number}
                cvc={card?.cvv}
                expiration={card?.expiry_date}
                name={card?.card_holder_name}
                since="2004"
              />
              <Text style={styles.amount}>
                Solde Actuel : {card?.montant} XAF
              </Text>
            </View>
          <View>
            {activeTab.inputs.map((inputElement, index) =>
              constructElement(inputElement, index),
            )}
          </View>
        </ScrollView>

        <View style={styles.buttonEnd}>
          <Button mode="contained">Recharger</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Recharge;
