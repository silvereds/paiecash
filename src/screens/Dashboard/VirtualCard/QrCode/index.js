import React, {useContext, useState, useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import styles from './qrCodeStyle';
import {theme} from '../../../../core/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import {EmptyListComponent} from '../../../../components/EmptyListComponent';
import qrCodes from '../../../../constants/qrcode.json';
import CreditCardDisplay from 'react-native-credit-card-display';
import {APPENV} from '../../../../core/config';
import useFetchApi from '../../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import Toast from "react-native-toast-message";
import QrCodeItem from './Components/QrCodeItem/index.js';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';
import shortid from 'shortid';

function History({route, navigation}) {
  const {card} = route.params;
  const [selectedItem, setSelectedItem] = useState({index: 0, showMore: false});
  const {authData} = useContext(AuthentificationContext);
  const {
    data: qrCodesList,
    loading,
    postData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/qr_code/list/transaction');

  useEffect(() => {
    if (status >= 400 && status <= 600) {
      Toast.show({
        type: 'error',
        text1: 'Erreur de connexion',
        text2: error.message,
      });
    }
  }, [error]);

  useEffect(() => {
    postData({"refresh_token": authData.refresh_token});
  }, []);

  

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <LeftHeaderComponent title="QrCode" navigation={navigation} />}
        isSearchBtnVisible={false}
        isAddBtnVisible={true}
        onAddBtnPress={() => alert('add')}
      />
      {qrCodes?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.membersWrapper}>
            <View style={styles.fullWidthCenter}>
              <CreditCardDisplay
                style={styles.fullWidth}
                number={card?.cardNumber}
                cvc={card?.cardCvv}
                expiration={card?.expiredAt}
                name={card?.cardOwner}
                since="2004"
              />
              <Text style={styles.amount}>
                {card?.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Xaf
              </Text>
            </View>
            {qrCodes.map((qrCode, index) => <QrCodeItem qrCode={qrCode} index={index} selectedItem={selectedItem} setSelectedItem={setSelectedItem} key={shortid()} />)}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}

export default History;
