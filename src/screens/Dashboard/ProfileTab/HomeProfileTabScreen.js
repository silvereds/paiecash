import React, {useContext} from 'react';
import {
  BackHandler,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import useAsyncData from '../../../services/DataStorage/UseAsyncData';
import AuthentificationContext from '../../../context/AuthentificationContext';
import {TabScreenHeader} from '../../../components/TabScreenHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ProfileStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../core/theme';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import actions from './actions';
import Action from './Components/Action';
import shortid from 'shortid';

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
const  ProfileHomeScreen = ({navigation})=>{
  const {authData, setAuthData} = useContext(AuthentificationContext);
  const {data, removeStorage} = useAsyncData('data');
  
  const handleNavigation = (screen, params) => {
    Toast.show({
      type: 'info',
      text1: 'Module bientot disponible',
    });
    navigation.navigate(screen)
  };

  function logoutAction() {
    setAuthData({});
    removeStorage()
    navigation.navigate('StartScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground source={require('../../../assets/background.jpg')}>
          <View style={styles.profileDetailsSection}>
            <View style={styles.profileInfoSection}>
              <Image
                style={styles.profilePhoto}
                source={require('../../../assets/icon.png')}
              />
              <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsText}>EDGAR JAURES KANO</Text>
                <Text style={styles.statisticsTitle}>Compte personnel</Text>
              </View>
            </View>
          </View>
          </ImageBackground>
          <View style={{borderTopStartRadius:25,borderTopEndRadius:25,backgroundColor:"#fff",marginTop:-50}}>
          <View style={styles.centeredView}>
            <TouchableOpacity
              style={styles.buttonVerifyAccount}
              onPress={() => {navigation.navigate('AccountValidation')}}>
              <Feather name="alert-circle" style={styles.textVerifyAccount} size={18} color="black" />
              <Text style={styles.textVerifyAccount}>Vérifier mon compte</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exploreSection}>
            <Text style={styles.exploreHeader}></Text>
            <View style={styles.exploreContent}>
              {actions.map(action => (
                <Action
                  title={action.title}
                  route={action.route}
                  Icon={action.icon}
                  onPress={()=>action.route === 'Certifiez Votre Profile'? navigation.navigate(action.route) : logoutAction()
                  }
                  key={shortid()}
                />
              ))}
            </View>
         
         
         
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default ProfileHomeScreen
