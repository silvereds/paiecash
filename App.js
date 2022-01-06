import React from 'react';


import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import StartScreen from "./src/screens/Start/StartScreen";
import LoginScreen from "./src/screens/Authentification/Login/LoginScreen";
import RegisterScreen from "./src/screens/Authentification/Register/RegisterScreen";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import ResetPasswordScreen from "./src/screens/Authentification/ResetPassword/ResetPasswordScreen";

const Stack = createStackNavigator()

const App: () => Node = () => {


  return (
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
