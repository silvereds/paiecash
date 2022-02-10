import React from 'react';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import styles from './historiqueStyle';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import {EmptyListComponent} from '../../../../components/EmptyListComponent';
import transactions from '../../../../constants/history.json';
import CreditCardDisplay from 'react-native-credit-card-display';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';
import HistoryItem from './Components/HistoryItem';
import shortid from 'shortid';

function History({route, navigation}) {
  const {card} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <LeftHeaderComponent title="Historique" navigation={navigation} />}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      {transactions?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.membersWrapper}>
            <View style={styles.fullWidthCenter}>
              <CreditCardDisplay
                style={styles.fullWidth}
                number={card?.credit_card_number}
                cvc={card?.cvv}
                expiration={card?.expiry_date}
                name={card?.card_holder_name}
                since="2004"
              />
              <Text style={styles.amount}> Solde Actuel : {card?.montant} XAF </Text>
            </View>
            {transactions.map(transaction => <HistoryItem transaction={transaction}  key={shortid.generate()} />)}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}

export default History;
