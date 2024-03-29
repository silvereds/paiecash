import React, {useEffect} from 'react';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk-next';
import {View} from 'react-native';
import useFetchApi from '../../../../helpers/fetchApi/useFetchApi';
import {APPENV} from '../../../../core/config';
import Button from '../../../../components/Button';
import useAsyncData from '../../../../services/DataStorage/UseAsyncData';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../../../../constants';

/**
 * Jaures Kano <ruddyjaures@gmail.com>
 */
export default function FacebookRegistration({
  loading,
  setAuthData,
  navigation,
}) {
  const {updateStorage} = useAsyncData('data');
  const {
    data,
    postData,
    error,
    status,
    loading: loadSocial,
  } = useFetchApi(
    APPENV.domain + '/api/authentification/registration/social/facebook',
  );

  useEffect(() => {
    if (status >= 200 && status <= 300 && data.token) {
      setAuthData(data);
      updateStorage(JSON.stringify(data));
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    }

    if (status >= 400 && status <= 600) {
      Toast.show({
        type: 'error',
        text1: 'Erreur de connexion',
        text2: error.message,
      });
    }
  }, [data, error]);

  const fbLogin = resCallBack => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallBack({message: 'email is required'});
        }

        if (result.isCancelled) {
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name',
            null,
            resCallBack,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
      },
    );
  };

  const onFbLogin = async () => {
    try {
      await fbLogin(_responseInfoCallBack);
    } catch (error) {
    }
  };

  const _responseInfoCallBack = async (error, result) => {
    if (error) {
    } else {
      await postData({
        first_name: result.name,
        email: result.email,
        account_id: result.id,
        api_key: APPENV.apiKey,
      });
    }
  };

  return (
    <View style={{width: '48%'}}>
      <Button
        //mode="outlined"
        color={COLORS.white}
        disabled={loading === true || loadSocial}
        onPress={onFbLogin}
        style={{backgroundColor:COLORS.blue}}
        >
        <Icon name="facebook" size={20} /> Facebook
      </Button>
    </View>
  );
}
