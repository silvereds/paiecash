import {Provider} from "react-native-paper";
import React, {useEffect, useState} from 'react';
import {theme} from "../core/theme";
import {NavigationContainer} from "@react-navigation/native";
import Toast from "react-native-toast-message";
import toastConfig from "../core/toastConfig";
import {AuthentificationContext} from "../context/AuthentificationContext";
import UseAsyncData from "../services/DataStorage/UseAsyncData";
import StartScreen from "./Start/StartScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {StyleSheet} from "react-native";
import LoginScreen from "./Authentification/Login/LoginScreen";
import RegisterScreen from "./Authentification/Register/RegisterScreen";
import Dashboard from "./Dashboard/Dashboard";
import ResetPasswordScreen from "./Authentification/ResetPassword/ResetPasswordScreen";

const Stack = createStackNavigator()

function ScreensIndex(props) {
    const {data} = UseAsyncData('data')
    const [authData, setAuthData] = useState({});

    useEffect(() => {
        // data !== null &&  setAuthData(JSON.parse(data))
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
                <Toast position='top' topOffset={60} config={toastConfig}/>
            </Provider>
        </AuthentificationContext.Provider>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
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


export default ScreensIndex;