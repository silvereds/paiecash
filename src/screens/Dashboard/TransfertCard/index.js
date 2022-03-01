import React, {useState, useEffect, useContext, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  TouchableHighlight,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DialogInput from 'react-native-dialog-input';
import {connect} from 'react-redux';
import {selectContactPhone} from 'react-native-select-contact';
import {TabScreenHeader} from '../../../components/TabScreenHeader';
import {theme} from '../../../core/theme';
import Button from '../../../components/Button';
import {APPENV} from '../../../core/config';
import useFetchApi from '../../../helpers/fetchApi/useFetchApi';
import AuthentificationContext from '../../../context/AuthentificationContext';
import styles from './TransfertCardStyle';
import {REFRESH_CARDS_LIST} from '../../../redux/card/constants';
import {ADD_RECENT_CONTACT} from '../../../redux/user/constants';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import SkeletonWidgets from './SkeletonWidgets';
import RecentContact from './Components/RecentContact';



function TransfertCard(props) {
  const {authData} = useContext(AuthentificationContext);
  const [password, setPassword] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [isDialogVisible, toggleDialog] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('0');
  const emailInput = useRef(null);
  const amountInput = useRef(null);

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
    if (paymentResponse && paymentResponse.message && password !== '') {
      Toast.show({
        type: 'success',
        text1: paymentResponse.message,
      });
      setEmail('');
      setAmount('0');
      amountInput.current?.clear();
      emailInput.current?.clear();
      setPassword('');
    }
  });

  function onSearchCard(emailValue = email) {
    searchCard(
      `?access_token=${authData.token}&api_key=${APPENV.apiKey}&email=${emailValue}`,
    );
  }

  function onMakePayment(userPassword = password) {
    let paymentData = {
      card_sender_id: props.cards[0]?.cardId,
      card_receiver_id: card.cardId,
      amount: amount,
      card_user_password: userPassword,
      access_token: authData.token,
      api_key: APPENV.apiKey,
    };
    postData(paymentData);
    props.addRecentContact(email, card, amount, favorite);
  }

  function onSelect(card) {
    setEmail(card.email);
    setAmount(card.lastAmount);
    emailInput.current?.setNativeProps({text: card.email});
    amountInput.current?.setNativeProps({text: card.lastAmount.toString()});
    onSearchCard(card.email);
  }

  function getPhoneNumber() {
    if (hasPermission)
      return selectContactPhone().then(selection => {
        if (!selection) {
          return null;
        }

        let {contact, selectedPhone} = selection;
        setEmail(selectedPhone.number);
        emailInput.current?.setNativeProps({text: selectedPhone.number});
        onSearchCard(selectedPhone.number);
        return selectedPhone.number;
      });
    else
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: "Paie Cash a besoin d'acceder à votre liste de contact.",
        buttonPositive: 'Accepter',
      }).then(() => {
        setHasPermission(true);
      });
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Transfert</Text>}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <SkeletonContent
        containerStyle={{flex: 1, width: '100%', alignItems: 'center'}}
        isLoading={loading}
        layout={SkeletonWidgets}>
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
                    ref={emailInput}
                    placeholder="Numéro ou E-mail du bénéficiaire"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    disabled={loading2}
                    onSubmitEditing={event => setEmail(event.nativeEvent.text)}
                    onEndEditing={event => onSearchCard(event.nativeEvent.text)}
                  />
                  {loading2 ? (
                    <View style={styles.floatingDeleteButton}>
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.primary}
                      />
                    </View>
                  ) : (
                    <Pressable
                      onPress={() => {
                        emailInput.current.clear();
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
                <TouchableHighlight
                  style={styles.rounderIco}
                  onPress={() => getPhoneNumber()}>
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
                <View style={styles.row}>
                  {props.recentContacts.map(contact => (
                    <RecentContact
                      data={contact}
                      key={contact.cardId}
                      onSelect={onSelect}
                    />
                  ))}
                </View>
              </ScrollView>

              <Text style={styles.textLabel}>Montant à tranférer</Text>
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={amountInput}
                    placeholder="Montant à tranférer"
                    returnKeyType="done"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    defaultValue="0"
                    onSubmitEditing={event => setAmount(event.nativeEvent.text)}
                  />
                  <Pressable
                    onPress={() => amountInput.current.clear()}
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
                      {card
                        ? parseInt(amount)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, '$&,')
                        : 'Montant à Transférer'}
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
            style={
              card === null || email === '' || amount === '0' || loading3
                ? {}
                : styles.submitButton
            }
            disabled={
              card === null || email === '' || amount === '0' || loading3
            }
            onPress={() => toggleDialog(!isDialogVisible)}
            mode="contained">
            Transférer
          </Button>
        </View>
      </SkeletonContent>
      <DialogInput
        isDialogVisible={isDialogVisible}
        title={'Confirmation'}
        message={`Entrez votre code pour confimer le transfert de ${parseInt(
          amount,
        )
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')} vers ${card?.cardOwner}`}
        hintInput={'Votre code'}
        cancelText="Annuler"
        submitText="Transférer"
        submitInput={inputText => {
          setPassword(inputText);
          toggleDialog(!isDialogVisible);
          onMakePayment(inputText);
        }}
        closeDialog={() => {
          toggleDialog(!isDialogVisible);
        }}></DialogInput>
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
    refreshCardsList: dataCards =>
      dispatch({type: REFRESH_CARDS_LIST, payload: dataCards}),
    addRecentContact: (email, card, amount, isFavorite) =>
      dispatch({
        type: ADD_RECENT_CONTACT,
        payload: {
          email,
          cardId: card.cardId,
          cardOwner: card.cardOwner,
          lastAmount: amount,
          isFavorite,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransfertCard);
