import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './src/screens/Start/StartScreen';
import LoginScreen from './src/screens/Authentification/Login/LoginScreen';
import RegisterScreen from './src/screens/Authentification/Register/RegisterScreen';
import Dashboard from './src/screens/Dashboard';
import ResetPasswordScreen from './src/screens/Authentification/ResetPassword/ResetPasswordScreen';
import UseAsyncData from './src/services/DataStorage/UseAsyncData';
import {theme} from './src/core/theme';
import AuthentificationContext from './src/context/AuthentificationContext';
import Toast from 'react-native-toast-message';
import toastConfig from './src/core/toastConfig';
import {Provider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {configureStore} from './src/redux/store';
import axios from 'axios';
import { APPENV } from './src/core/config';

const Stack = createStackNavigator();

const App: () => Node = () => {

  //const {data} = UseAsyncData('data');
  const [authData, setAuthData] = useState({});

  // useEffect(() => {
  //   if(data !== null){
  //     //setAuthData(JSON.parse(data));
  //   }
    
  // }, [data]);

  return (
    <AuthentificationContext.Provider value={{authData, setAuthData}}>
      <Provider theme={theme}>
        <ReduxProvider store={configureStore()}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <Toast position="top" topOffset={60} config={toastConfig} />
        </ReduxProvider>
      </Provider>
    </AuthentificationContext.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;