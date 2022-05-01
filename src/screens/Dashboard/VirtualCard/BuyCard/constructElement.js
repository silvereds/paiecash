import React, { useState } from 'react';
import TextInput from '../../../../components/TextInput';
import {Picker} from '@react-native-picker/picker';
import shortid from 'shortid';
import styles from '../Recharge/rechargeStyle';
import Button from '../../../../components/Button';

const BankList = ({inputElement, index, card,activeTab,setActiveTab})=>{
    const[bank,setBank] = useState(inputElement.value)
    return (
      <Picker
        selectedValue={bank}
        style={styles.picker}
        key={shortid.generate()}
        onValueChange={itemValue => {
          let newTab = activeTab;
          newTab.inputs[index].value = itemValue;
          setActiveTab(newTab);
          setBank(itemValue);
        }}>
        {inputElement.options.map(option => (
          <Picker.Item
            key={shortid.generate()}
            label={option.name}
            value={option.value}
          />
        ))}
      </Picker>
    )
}


export default function constructElement(inputElement,index,activeTab,setActiveTab,onMakePayment) {
  const AmountInput = ()=>{
    const [amount , setAmount]= useState('')
    return(<>
    <TextInput
    style={styles.input}
    label={inputElement.name}
    key={shortid.generate()}
    keyboardType={inputElement.type}
    returnKeyType="next"
    defaultValue={inputElement.value}
    onChangeText={text => {
      setAmount(text)
    }}
  
  />
  <Button mode="contained" onPress={() => {}}>
    Acheter
  </Button>
  </>)
  }
  switch (inputElement.type) {
    case 'select':
      return (
        <BankList 
          inputElement={inputElement}
          index={index}
          activeTab ={activeTab}
          setActiveTab={setActiveTab}
        />
      );

    default:
      if(inputElement.name==='amount')
        return (
          <AmountInput/>
        );
      else
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
