import React, { useState } from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './qrCodeStyle.js';
import {TabScreenHeader} from '../../../../components/TabScreenHeader';
import LeftHeaderComponent from '../../../../components/LeftHeaderComponent';
import { theme } from '../../../../core/theme.js';
import Pdf from 'react-native-pdf';

function PrintQrCode({route, navigation}) {
  const {url} = route.params;
  const {title} = route.params;
  const source = {uri: url, cache: false};
  const [isLoading, setLoading] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <LeftHeaderComponent title={title} navigation={navigation} />
        )}
        isSearchBtnVisible={false}
        isMoreBtnVisible={false}
      />
      <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            setLoading(false);
          }}
          style={styles.pdf}
        />
        <ActivityIndicator size={'large'} color={theme.colors.primary} style={{display: `${isLoading?'flex':'none'}`,...styles.floatingLoader}} />
    </SafeAreaView>
  );
}

export default PrintQrCode;
