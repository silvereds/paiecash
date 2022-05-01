import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, ScrollView ,SafeAreaView} from 'react-native';
import shortid from 'shortid';
import styles from '../Recharge/rechargeStyle';
//import PaymentMethodss from '../../../../constants/PaymentMethodss.json';
import Toast from "react-native-toast-message";
import Button from '../../../../components/Button';
import constructElement from './constructElement';
import ItemCard from './Components/ItemCard';
import useFetchApi from '../../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import { APPENV } from '../../../../core/config';
import {Picker} from '@react-native-picker/picker';
import { BankList , PaymentMethods } from '../../../../constants/PaiementSettings';
import TextInput from '../../../../components/TextInput';
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../../../../constants';

function Step2({card, onPaymentFinish}) {
  const [activeTab, setActiveTab] = useState(PaymentMethods[0]);
  const [bank, setBank] = useState(BankList[0].name);
  const [phone,setPhone] = useState('')
  const [sucess,setSucess] = useState(false)
  const [amount , setAmount] = useState('0')
  const [errorPhone,setErrorPhone]= useState(false)
  
  //const {authData} = useContext(AuthentificationContext);
  const {
    data: paymentresponse,
    loading,
    postData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/card/request');

  // const toggleTab = tab => {
  //   setActiveTab(tab);
  // };
  
  // const isActiveTab = tab => {
  //   const value = activeTab === tab.id;
  //   return value;
  // };

  useEffect(() => {
    if (status >= 400 && status <= 600) {
      Toast.show({
        type: 'error',
        text2: error.message,
      });
    }else if(status===200){
        
        setSucess(true)
    }
    if(paymentresponse?.length !== 0){
      setSucess(true)
      console.log('payement response',paymentresponse)
    }
    
  }, [error, status, paymentresponse])

  function onMakePayment() {
      
      let requestData = {
        //user_id: authData?.user.id,
        card_type:card?.id,
        amount: amount,
        paiement_method: activeTab.value,
      }
      postData(requestData)
      
  }
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.rechargeBody}>
      <View style={styles.rechargeTabs}>
        {PaymentMethods.map((PaymentMethods ,i)=> (
          <TouchableOpacity
            key={i}
            style={[
              styles.methodTab,
              activeTab.value ===PaymentMethods.value ? styles.activeMethodTab : null,
            ]}
            onPress={() => setActiveTab(PaymentMethods)}
            >
            <Text
              style={[
                styles.methodTabText,
                activeTab.value === PaymentMethods.value
                  ? styles.activeMethodTabText
                  : styles.inActiveMethodTabText,
              ]}>
              {PaymentMethods.value}
            </Text>
          </TouchableOpacity>
        ))}
        
      </View>
      <View style={styles.fullWidthCenter}>
          <ItemCard data={card} onPress={()=>{}}/>
      </View>
      {activeTab.value === 'Bank Transfert' && <Picker
        selectedValue={bank}
        style={styles.picker}
        key={shortid.generate()}
        onValueChange={itemValue => {
          setBank(itemValue)
        }}>
        {BankList.map(option => (
          <Picker.Item
            
            label={option.name}
            value={option.value}
          />
        ))}
      </Picker>}
      {errorPhone && <Text style={{color:COLORS.red}}> numéro invalide </Text>}
      {activeTab.value !== 'Bank Transfert' && 
      <>
            
            <TextInput
            style={styles.input}
            label='telephone'
            
            returnKeyType="next"
            value={phone}
            onChange={(text) => {
              setPhone(text.target.value)
            }}
            keyboardType='numeric'
          />
      </>
      }
      <TextInput
        style={styles.input}
        label='montant'
        //key={shortid.generate()}
        //returnKeyType="next"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType='numeric'
      />
      <View style={styles.buttonEnd}>
        {sucess && 
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Icon name='check' size={40} />
          <Text style={{textAlign:'center'}}>bravo vous disposez d'une nouvelle carte paiecash</Text>
        </View>
        
        }

        {(!sucess) && <Button mode="contained" onPress={() => onMakePayment()} >
          {loading? 'Paiement ...' : 'Acheter'}
        </Button>}
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default Step2;
