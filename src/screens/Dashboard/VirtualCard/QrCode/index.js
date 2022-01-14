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
import shortid from 'shortid';
import styles from './qrCodeStyle';
import {theme} from '../../../../core/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabScreenHeader} from '../../../../components/TabScreenHeader/TabScreenHeader';
import {EmptyListComponent} from '../../../../components/EmptyListComponent';
import qrCodes from '../../../../constants/qrcode.json';
import CreditCardDisplay from 'react-native-credit-card-display';

function History({route, navigation}) {
  const {card} = route.params;
  const [selectedItem, setSelectedItem] = useState({index: 0, showMore: false});

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
          <Ionicons name="arrow-back" color={theme.colors.text} size={22} />
        </Pressable>
        <Text style={styles.headerTitle}>Qr Code</Text>
      </View>
    );
  }

  function showQrCode(qrCode, index) {
    if (selectedItem.index == index && selectedItem.showMore)
      return (
        <View style={styles.singleMemberMore} key={shortid.generate()}>
          <Image
            style={styles.singleMemberPhotoMore}
            source={{
              uri: qrCode?.code,
            }}
          />
          <View style={styles.singleMemberInfoMore}>
          <View>
          <Text
              style={styles.selectedMemberName}
              numberOfLines={1}
              ellipsizeMode="tail">
              {qrCode?.designation}
            </Text>
            <Text style={styles.selectedMemberLastSeen}>{qrCode?.date}</Text>
          </View>
            
            <Pressable onPress={() => setSelectedItem({index, showMore: false})}>
              <Ionicons
                name="trash"
                size={18}
                color={theme.colors.error}
              />
            </Pressable>
          </View>
          <Pressable onPress={() => setSelectedItem({index, showMore: false})}>
            <Ionicons
              name="chevron-up-circle"
              size={18}
              color={theme.colors.primary}
            />
          </Pressable>
        </View>
      );
    else
      return (
        <View style={styles.singleMember} key={shortid.generate()}>
          <Image
            style={styles.singleMemberPhoto}
            source={{
              uri: qrCode?.code,
            }}
          />
          <View style={styles.singleMemberInfo}>
            <Text
              style={styles.selectedMemberName}
              numberOfLines={1}
              ellipsizeMode="tail">
              {qrCode?.designation}
            </Text>
            <Text style={styles.selectedMemberLastSeen}>{qrCode?.date}</Text>
          </View>
          <Pressable onPress={() => setSelectedItem({index, showMore: true})}>
            <Ionicons
              name="chevron-down-circle"
              size={18}
              color={theme.colors.primary}
            />
          </Pressable>
        </View>
      );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => showLeftComponent()}
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
                number={card.credit_card_number}
                cvc={card.cvv}
                expiration={card.expiry_date}
                name={card.card_holder_name}
                since="2004"
              />
              <Text style={styles.amount}>
                Solde Actuel : {card.montant} XAF
              </Text>
            </View>
            {qrCodes.map((qrCode, index) => showQrCode(qrCode, index))}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}

export default History;
