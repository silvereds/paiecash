import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle';
import {connect} from 'react-redux';

import {TabScreenHeader} from '../../../components/TabScreenHeader/TabScreenHeader';
import {theme} from '../../../core/theme';
import Button from '../../../components/Button';

import {APPENV} from '../../../core/config';
import {
  addRecentContact,
  updateRecentContact,
  deleteRecentContact,
} from '../../../redux/actions';
import useFetchApi from '../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../context/AuthentificationContext';
import styles from './TransfertCardStyle';
import { REFRESH_CARDS_LIST } from '../../../redux/card/constants';

const RecentContact = ({data}) => {
  function random() {
    return Math.floor(Math.random() * 255);
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container2}>
        <View
          style={{
            backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
            ...styles.VerticalBar,
          }}
        />
        <View style={styles.taskMiddleColumn}>
          <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">
            {data.cardOwner}
          </Text>
          <Text style={styles.taskDesc} numberOfLines={1} ellipsizeMode="tail">
            {data.lastAmount}
          </Text>
        </View>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Pressable onPress={() => {}}>
            <AntDesign
              name={data.isFavorite ? 'star' : 'staro'}
              size={16}
              color={
                data.isFavorite ? theme.colors.primary : theme.colors.disabled
              }
            />
          </Pressable>
          <Pressable>
            <AntDesign
              name="deleteuser"
              size={16}
              color={theme.colors.disabled}
            />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

function TransfertCard(props) {
  const {authData} = useContext(AuthentificationContext);
  const [amount, setAmount] = useState('0');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password');
  const [favorite, setFavorite] = useState(false);

  const {
    data: dataCards,
    loading,
    searchData,
    status,
    error,
  } = useFetchApi(APPENV.domain + '/api/card/list');

  const {
    data: {card},
    loading: loading2,
    searchData: searchCard,
    status: status2,
    error: error2,
  } = useFetchApi(APPENV.domain + '/api/card/check');

  const {
    data: paymentResponse,
    loading: loading3,
    postData,
    status: status3,
    error: error3,
  } = useFetchApi(APPENV.domain + '/api/card/transfert');

  useEffect(() => {
    if (
      (status >= 400 && status <= 600) ||
      (status2 >= 400 && status2 <= 600) ||
      (status3 >= 400 && status3 <= 600)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Erreur de connexion',
        text2: error ? error.message : error2 ? error2.message : error3.message,
      });
    }
  }, [error, error2, error3]);

  useEffect(() => {
    searchData(`?access_token=${authData.token}&api_key=${APPENV.apiKey}`);
  }, []);

  useEffect(() => {
    if (props.cards !== dataCards.cards) {
      props.refreshCardsList(dataCards);
    }
  });

  useEffect(() => {
    if (paymentResponse && paymentResponse.message)
      alert(paymentResponse.message);
  });

  function onSearchCard(emailValue = email) {
  console.log('emailValue',emailValue);
  searchCard(
      `?access_token=${authData.token}&api_key=${APPENV.apiKey}&email=${emailValue}`,
    );
  }

  console.log('card',card);

  function onMakePayment() {
    postData({
      card_sender_id: props.cards[0].cardId,
      card_receiver_id: card.cardId,
      amount,
      card_user_password: password,
      access_token: authData.token,
      api_key: APPENV.apiKey,
    });
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
      }}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Transfert</Text>}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.profileDetailsSection}>
            <View style={styles.profileInfoSection}>
              <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsTitle}>Solde Principal</Text>
                <Text style={styles.statisticsText}>
                  {props.cards && props.cards[0]
                    ? props.cards[0].amount
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
                    : '...'}{' '}
                  {props.cards ? 'Xaf' : null}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              ...styles.Maincontainer,
            }}>
            <Text style={styles.textLabel}>
              Numéro ou E-mail du bénéficiaire
            </Text>
            <View style={styles.row}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Numéro ou E-mail du bénéficiaire"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  onSubmitEditing={(event) => setEmail(event.nativeEvent.text)}
                  onEndEditing={(event) => onSearchCard(event.nativeEvent.text)}
                />
                {loading2 ? (
                  <ProgressCircle
                    radius={30}
                    PercentageCircle={30}
                    borderWidth={7}
                    color="#6AC67E"
                    shadowColor="#f4f4f4"
                    bgColor="#fff"
                  />
                ) : (
                  <Pressable
                    onPress={() => {
                      setEmail('');
                      onSearchCard('');
                    }}
                    style={styles.floatingDeleteButton}>
                    <MaterialIcons
                      name="highlight-remove"
                      color={theme.colors.textLight}
                      size={22}
                    />
                  </Pressable>
                )}
              </View>
              <TouchableHighlight style={styles.rounderIco} onPress={() => {}}>
                <AntDesign
                  name="contacts"
                  color={theme.colors.textWhite}
                  size={22}
                />
              </TouchableHighlight>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                {props.recentContacts.map(contact => (
                  <RecentContact data={contact} />
                ))}
              </View>
            </ScrollView>

            <Text style={styles.textLabel}>Montant à tranférer</Text>
            <View style={styles.row}>
              <View style={styles.inputContainer}>
                <TextInput
                  onSubmitEditing={(event) => setAmount(event.nativeEvent.text)}
                  placeholder="Montant à tranférer"
                  returnKeyType="done"
                  autoCapitalize="none"
                  keyboardType="numeric"
                />
                <Pressable
                  onPress={() => setAmount('')}
                  style={styles.floatingDeleteButton}>
                  <MaterialIcons
                    name="highlight-remove"
                    color={theme.colors.textLight}
                    size={22}
                  />
                </Pressable>
              </View>
            </View>

            <TouchableWithoutFeedback>
              <View style={styles.container}>
                <AntDesign
                  name="user"
                  size={40}
                  color={theme.colors.primary}
                  style={styles.taskProgressIndicator}
                />
                <View style={styles.taskMiddleColumn}>
                  <Text
                    style={styles.taskTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {card ? card.cardOwner : 'Nom du Béneficiare'}
                  </Text>
                  <Text
                    style={styles.taskDesc}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {card ? parseInt(amount).toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, '$&,') : 'Montant à Transférer'}
                  </Text>
                </View>
                <Pressable onPress={() => setFavorite(!favorite)}>
                  <AntDesign
                    name={favorite ? 'star' : 'staro'}
                    size={20}
                    color={
                      favorite ? theme.colors.primary : theme.colors.disabled
                    }
                  />
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          disabled={
            card === null || email === null || amount === '' || loading3
          }
          onPress={() => onMakePayment()}
          mode="contained">
          Transférer
        </Button>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = ({Card, User}) => {
  const {cards} = Card;
  const {recentContacts} = User;

  return {cards, recentContacts};
};

const mapDispatchToProps = dispatch => {
    return {
        refreshCardsList: (dataCards) => dispatch({type: REFRESH_CARDS_LIST, payload: dataCards })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransfertCard);
