import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './BuyCardStyle';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';
import Toast from "react-native-toast-message";
import Step1 from './Step1';
import Step2 from './Step2';


const cards = [
  {
    title : 'Carte etudiant',
    type : 'Etudiant',
    description : 'Idéal pour les étudiants et éleves avec un quota de transaction de 55,000 Fcfa/Jr',
    price: 12000,
    image : require('../../../../assets/adaptive-icon.png')
  },
  {
    title : 'Carte Commercant',
    type : 'Commercant',
    description : 'Idéal pour les commercants et entrepreneurs avec un quota journalier de 350,000 Fcfa/Jr',
    price: 25000,
    image : require('../../../../assets/adaptive-icon.png')
  },
  {
    title : 'Carte Business',
    type : 'Business',
    description : 'Idéal pour les homme d\'affaire avec un quota de transaction de 1,500,000 Fcfa/Jr',
    price: 55000,
    image : require('../../../../assets/adaptive-icon.png')
  }
]

function BuyCard({navigation}) {

  const [step, setStep] = useState(1)
  const [card, setCard] = useState(null)

  function goToStep2(data) {
    setCard(data)
    setStep(step+1)
  }

  function onPaymentFinish() {
    Toast .show({
      type: 'success',
      text1: `${card.title} achetée`,
      text2: 'Vous pouvez maintenant effectuer des opération avec votre carte.'
    })
    navigation.goBack();
  }

    return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <LeftHeaderComponent title="Acheter un Carte" navigation={navigation} />}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      {
        step===1 ? <Step1 goToStep2={goToStep2} cards={cards} />
        : <Step2 card={card} onPaymentFinish={onPaymentFinish} />        
      }
      
    </SafeAreaView>
  );
}

export default BuyCard;
