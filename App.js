import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import StartScreen from "./src/screens/Start/StartScreen";
import LoginScreen from "./src/screens/Authentification/Login/LoginScreen";
import RegisterScreen from "./src/screens/Authentification/Register/RegisterScreen";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import ResetPasswordScreen from "./src/screens/Authentification/ResetPassword/ResetPasswordScreen";
import UseAsyncData from "./src/services/DataStorage/UseAsyncData";
import {theme} from "./src/core/theme";
import AuthentificationContext from "./src/context/AuthentificationContext";
import {Provider} from "react-native-paper";
import Toast from 'react-native-toast-message';
import toastConfig from "./src/core/toastConfig";

const Stack = createStackNavigator()

const App: () => Node = () => {
  const {data} = UseAsyncData('data')
  const [authData, setAuthData] = useState({});

  useEffect(() => {
    data !== null && setAuthData(JSON.parse(data))
  }, [data])

  return (
      <AuthentificationContext.Provider value={{authData, setAuthData}}>
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
                initialRouteName="StartScreen"
                screenOptions={{
                  headerShown: false,
                }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen}/>
              <Stack.Screen name="LoginScreen" component={LoginScreen}/>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
              <Stack.Screen name="Dashboard" component={Dashboard}/>
              <Stack.Screen
                  name="ResetPasswordScreen"
                  component={ResetPasswordScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <Toast position='top'
                 topOffset={60}
                 config={toastConfig}/>
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
