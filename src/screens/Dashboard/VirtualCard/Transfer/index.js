import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import {theme} from '../../../../core/theme';
import styles from './transferStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import CreditCardDisplay from 'react-native-credit-card-display';
import useFetchApi from '../../../../helpers/fetchApi/useFetchApi';

function Transfer({route, navigation}) {
  const {
    data: dataCards,
    loading,
    searchData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/card/list');
  
  const {card} = route.params;

  useEffect(() => {
    if (status >= 400 && status <= 600) {
      Toast.show({
        type: 'error',
        text2: error.message,
      });
    } else {
      // if (props.cards !== dataCards.cards) props.refreshCardsList(dataCards);
      // if (dataCards.cards && cardSelect === undefined)
      //   setCardSelect(dataCards.cards[0]);
      console.log('cards here',dataCards)
    }
    console.log('cards here',dataCards)
  }, [error, dataCards]);

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
        <Text style={styles.headerTitle}>Transfert</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => showLeftComponent()}
        isMoreBtnVisible={true}
      />

      <View style={styles.transferBody}>
        <ScrollView style={styles.transferContent}>
          <View>
          <View style={styles.fullWidthCenter}>
              <CreditCardDisplay
                style={styles.fullWidth}
                number={card?.cardCvv}
                cvc={card?.cardCvv}
                expiration={card?.expiredAt}
                name={card?.cardOwner}
                since="2004"
              />
              <Text style={styles.amount}>
                Solde Actuel : {card?.amount} XAF
              </Text>
            </View>

            <View style={styles.fullWidth}>
              <TextInput
                label="Email ou numero de telephone du destinataire"
                returnKeyType="next"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.fullWidth}>
              <TextInput 
              label="Numero de la carte"
                keyboardType='numeric' 
                returnKeyType="next" />
            </View>

            <View style={styles.fullWidth}>
              <TextInput
                label="Montant à transférer"
                keyboardType='numeric'
                returnKeyType="done"
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonEnd}>
          <Button mode="contained">Transferer</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Transfer;