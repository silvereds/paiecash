import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import shortid from 'shortid';
import styles from '../Recharge/rechargeStyle';
import paymentMethods from '../../../../constants/paymentMethods.json';
import Toast from "react-native-toast-message";
import Button from '../../../../components/Button';
import constructElement from './constructElement';
import ItemCard from './Components/ItemCard';
import useFetchApi from '../../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import { APPENV } from '../../../../core/config';

function Step2({card, onPaymentFinish}) {
  const [activeTab, setActiveTab] = useState(paymentMethods[0]);
  const {authData} = useContext(AuthentificationContext);
  const {
    data: paymentresponse,
    loading,
    postData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/card/request');

  const toggleTab = tab => {
    setActiveTab(tab);
  };

  const isActiveTab = tab => {
    const value = activeTab?.value === tab;
    return value;
  };

  useEffect(() => {
    if (status >= 400 && status <= 600) {
      Toast.show({
        type: 'error',
        text2: error.message,
      });
    }else if(status===200){
        onPaymentFinish()
    }
  }, [error, status, paymentresponse])

  function onMakePayment() {
      let requestData = {
        user_id: authData.user.id,
        card_type: card?.type,
        amount: card?.price,
        paiement_method: activeTab?.value,
        api_key: APPENV.apiKey,
        access_token: authData.token
      }

      postData(requestData)
  }

  return (
    <View style={styles.rechargeBody}>
      <View style={styles.rechargeTabs}>
        {paymentMethods?.map(paymentMethod => (
          <TouchableOpacity
            style={[
              styles.methodTab,
              isActiveTab(paymentMethod.value) ? styles.activeMethodTab : null,
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
          <ItemCard data={card} />
        </View>
        <View>
          {activeTab.inputs.map((inputElement, index) =>
            constructElement(inputElement, index, card),
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonEnd}>
        <Button mode="contained" onPress={() => onMakePayment()}>Acheter</Button>
      </View>
    </View>
  );
}

export default Step2;
