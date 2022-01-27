;import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import { selectContactPhone } from 'react-native-select-contact';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import shortid from 'shortid';
import styles from './contactsStyle';
import {theme} from '../../../core/theme';
import {TabScreenHeader} from '../../../components/TabScreenHeader/TabScreenHeader';
import {EmptyListComponent} from '../../../components/EmptyListComponent';
import Button from '../../../components/Button';

export default function ContactsScreen(props) {
  const {contacts, setContacts} = useState([]);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === "android") {
//         PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//           title: "Contacts",
//           message: "This app would like to view your contacts."
//         }).then(() => {
//           loadContacts();
//         });
//       } else {
//         loadContacts();
//       }
//     })();
//   }, []);

  function getPhoneNumber() {
    return selectContactPhone()
        .then(selection => {
            if (!selection) {
                return null;
            }
            
            let { contact, selectedPhone } = selection;
            console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
            return selectedPhone.number;
        });  
    }

  function goBack(contact) {
    const {navigation} = props;
    navigation.goBack();
    navigation.state.params.onSelect({
      email: contact?.emailAddresses[0].email,
      number: contact?.phoneNumbers[0].number,
    });
  }

  function showLeftComponent() {
    return (
      <View style={styles.hearderContainer}>
        <Pressable
          onPress={() => {
            props.navigation.goBack();
          }}
          style={styles.headerIcon}>
          <Ionicons name="arrow-back" color={theme.colors.text} size={24} />
        </Pressable>
        <Text style={styles.headerTitle}>Contacts</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => showLeftComponent()}
        isSearchBtnVisible={true}
        isMoreBtnVisible={false}
      />
      <Button onPress={() => getPhoneNumber()}>
          Selectionner un contact
      </Button>
      {/* {contacts?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.membersWrapper}>
            {contacts.map(contact => (
              <TouchableOpacity
                style={styles.singleMember}
                onPress={() => goBack(contact)}
                key={shortid.generate()}>
                <Text style={styles.singleMemberPhoto}>
                  {contact?.givenName.slice(0, 1).toUppercase()}
                </Text>
                <View style={styles.singleMemberInfo}>
                  <Text
                    style={styles.selectedMemberName}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {contact?.givenName + ' ' + contact?.familyName}
                  </Text>
                  <Text style={styles.selectedMemberLastSeen}>
                    {contact?.phoneNumbers[0].label +
                      ': ' +
                      contact?.phoneNumbers[0].number}
                  </Text>
                </View>
                <FontAwesome
                  name="send"
                  size={17}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )} */}
    </SafeAreaView>
  );
}
