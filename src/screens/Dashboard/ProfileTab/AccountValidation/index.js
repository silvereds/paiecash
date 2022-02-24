import React from 'react';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';
import shortid from 'shortid';

function AccountValidation({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <LeftHeaderComponent title="Vérification de compte" navigation={navigation} />}
        isSearchBtnVisible={false}
        isMoreBtnVisible={false}
      />
    </SafeAreaView>
  );
}

export default AccountValidation;
