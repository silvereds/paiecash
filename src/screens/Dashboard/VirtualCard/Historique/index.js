import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import styles from './historiqueStyle';
import {theme} from '../../../../core/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import {EmptyListComponent} from '../../../../components/EmptyListComponent';
import transactions from '../../../../constants/history.json';
import CreditCardDisplay from 'react-native-credit-card-display';

function History({route, navigation}) {
  const {card} = route.params;

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
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
        <Text style={styles.headerTitle}>Historique</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => showLeftComponent()}
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
              <Text style={styles.amount}>
                Solde Actuel : {card?.montant} XAF
              </Text>
            </View>
            {transactions.map(transaction => (
              <TouchableOpacity
                style={styles.singleMember}
                key={shortid.generate()}>
                <Image
                  style={styles.singleMemberPhoto}
                  source={{
                    uri: transaction?.accountPhoto,
                  }}
                />
                <View style={styles.singleMemberInfo}>
                  <Text
                    style={styles.selectedMemberName}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {transaction?.accountName}
                  </Text>
                  <Text style={styles.selectedMemberLastSeen}>
                    {transaction?.accountNumber}
                  </Text>
                </View>
                <View style={styles.justifyEnd}>
                  <View style={styles.rowGroup}>
                    <Ionicons
                      name={transaction.type == 'credit' ? 'add' : 'remove'}
                      size={17}
                      color={
                        transaction.type == 'credit'
                          ? theme.colors.primary
                          : theme.colors.error
                      }
                    />
                    <Text style={styles[`${transaction.type}Amount`]}>
                      {transaction?.amount}
                    </Text>
                  </View>
                  <Text>{transaction.date}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}

export default History;
