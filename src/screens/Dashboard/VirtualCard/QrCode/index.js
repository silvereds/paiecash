import React, {useContext, useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './qrCodeStyle';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import {EmptyListComponent} from '../../../../components/EmptyListComponent';
import CreditCardDisplay from 'react-native-credit-card-display';
import {APPENV} from '../../../../core/config';
import useFetchApi from '../../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../../context/AuthentificationContext';
import Toast from 'react-native-toast-message';
import QrCodeItem from './Components/QrCodeItem/index.js';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';
import shortid from 'shortid';
import QrCodeForm from './Components/QrCodeForm';

function History({route, navigation}) {
  const {card} = route.params;
  const [formVisibility, setFormVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState({index: 0, showMore: false});
  const {authData} = useContext(AuthentificationContext);
  const { data: qrCodeList, loading, searchData, status, error} = useFetchApi(APPENV.domain + '/api/qr_code/list/transaction');

  const {
    data: qrCode,
    loading: loading2,
    postData,
    status: status2,
    error: error2,
  } = useFetchApi(APPENV.domain + '/api/qr_code/transaction/add');

  useEffect(() => {
    if (status >= 400 && status <= 600) {
      Toast.show({
        type: 'error',
        text2: error.message,
      });
    }
    if (status2 >= 400 && status2 <= 600) {
      Toast.show({
        type: 'error',
        text2: error2.message,
      });
      setFormVisibility(!formVisibility);
    } else if(qrCode?.designation!==undefined){
      Toast.show({
        type: 'success',
        text2: `${qrCode.designation} créé`,
      });
      setFormVisibility(!formVisibility);
    }
  }, [error, status, status2, qrCode]);

  useEffect(() => {
    searchData(
      `?card_id=${card.cardId}&access_token=${authData.token}&api_key=${APPENV.apiKey}`,
    );
  }, [qrCode]);

  const createQrCode = (designation, enterpriseId) => {
    let qr_code_data = {
      designation: designation,
      card_id: card.cardId,
      entreprise_id: enterpriseId,
      api_key: APPENV.apiKey,
      access_token: authData.token,
    };
    postData(qr_code_data);
  };

  const printQrCode = (index) => {
    navigation.navigate('printQrCode', {title: 'QR Code '+qrCodeList.qrcode_transaction[index]?.designation, url: APPENV.domain + '/qr_code/print/transaction/'+qrCodeList.qrcode_transaction[index]?.code})
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <LeftHeaderComponent title="QrCode" navigation={navigation} />
        )}
        isSearchBtnVisible={false}
        isAddBtnVisible={true}
        onAddBtnPress={() => setFormVisibility(!formVisibility)}
      />
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
          {formVisibility ? (
            <QrCodeForm
              onSubmitForm={createQrCode}
              loading={loading2}
              deignationError={error2.message}
            />
          ) : qrCodeList?.total_qr_code ? (
            qrCodeList.qrcode_transaction.map((qrCode, index) => (
              <QrCodeItem qrCode={qrCode} index={index} printQrCode={printQrCode} key={shortid()} />
            ))
          ) : (
            <EmptyListComponent />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default History;
