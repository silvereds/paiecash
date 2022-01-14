import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabScreenHeader} from '../../../../components/TabScreenHeader/TabScreenHeader';
import {theme} from '../../../../core/theme';
import shortid from 'shortid';
import styles from './rechargeStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import paymentMethods from '../../../../constants/paymentMethods.json';
import TextInput from '../../../../components/TextInput';
import {Picker} from '@react-native-picker/picker';
import Button from '../../../../components/Button';
import CreditCardDisplay from 'react-native-credit-card-display';

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

  function showLeftComponent() {
    return (
      <View style={styles.hearderContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.headerIcon}>
          <Ionicons name="arrow-back" color={theme.colors.text} size={24} />
        </Pressable>
        <Text style={styles.headerTitle}>Recharge</Text>
      </View>
    );
  }

  function constructElement(inputElement, index) {
    switch (inputElement.type) {
      case 'select':
        return (
          <Picker
            selectedValue={inputElement.value}
            style={styles.picker}
            key={shortid.generate()}
            onValueChange={itemValue => {
              let newTab = activeTab;
              newTab.inputs[index].value = itemValue;
              setActiveTab(newTab);
            }}>
            {inputElement.options.map(option => (
              <Picker.Item
                key={shortid.generate()}
                label={option.name}
                value={option.value}
              />
            ))}
          </Picker>
        );

      default:
        return (
          <TextInput
            style={styles.input}
            label={inputElement.name}
            key={shortid.generate()}
            returnKeyType="next"
            value={inputElement.value}
            onChangeText={text => {
              let newTab = activeTab;
              newTab.inputs[index].value = text;
              setActiveTab(newTab);
            }}
            keyboardType={inputElement.type}
          />
        );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => showLeftComponent()}
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
                number={card.credit_card_number}
                cvc={card.cvv}
                expiration={card.expiry_date}
                name={card.card_holder_name}
                since="2004"
              />
              <Text style={styles.amount}>
                Solde Actuel : {card.montant} XAF
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
