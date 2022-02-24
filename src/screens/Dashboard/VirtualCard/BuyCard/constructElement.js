import React from 'react';
import TextInput from '../../../../components/TextInput';
import {Picker} from '@react-native-picker/picker';
import shortid from 'shortid';
import styles from '../Recharge/rechargeStyle';

export default function constructElement(inputElement, index, card) {
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
      if(inputElement.name==='amount')
        return (
          <TextInput
            style={styles.input}
            label={inputElement.name}
            key={shortid.generate()}
            value={card?.price.toString()}
            disabled={true}
          />
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
