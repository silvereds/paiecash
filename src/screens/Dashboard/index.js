import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabScreens from "./HomeTab/HomeTabScreens";
import QrCodeTabScreens from "./QrCodeTab/QrCodeTabScreens";
import ProfileTabScreens from "./ProfileTab/ProfileTabScreens";
import CustomTabBar from "../../Navigators/CustomTabBar";
import VirtualCard from "./VirtualCard";
import Recharge from './VirtualCard/Recharge';
import Transfer from './VirtualCard/Transfer';
import Historique from './VirtualCard/Historique';
import QrCode from './VirtualCard/QrCode';
import printQrCode from './VirtualCard/QrCode/print';
import TransfertCard from "./TransfertCard";
import PrintQrCode from './VirtualCard/QrCode/print';
import BuyCard from './VirtualCard/BuyCard';
import AccountValidation from './ProfileTab/AccountValidation';
import EnterpriseList from './Enterprises';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function Dashboard({navigation}) {

    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            initialRouteName="Acceuil"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="Acceuil" component={HomeTabScreens}/>
            <Tab.Screen name="Scan" component={QrCodeTabScreens}/>
            <Tab.Screen name="Profile" component={ProfileTabScreens}/>
            {/*<Tab.Screen name="Transfert" component={TransfertCard}/>*/}
            <Tab.Screen name="Entreprise" component={EnterpriseList}/>
            <Stack.Screen name="Carte" component={VirtualCard}/>
          </Tab.Navigator>
    );
}


export default function DashboardStack({navigation}) {
    return (
      <Stack.Navigator
        initialRouteName="Homeboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Homeboard" component={Dashboard} />
        <Stack.Screen name="Recharge" component={Recharge} />
        <Stack.Screen name="AccountValidation" component={AccountValidation} />
        <Stack.Screen name="BuyCard" component={BuyCard} />
        {/* <Stack.Screen name="Transfer" component={Transfer} /> */}
        <Stack.Screen name="Historique" component={Historique} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="printQrCode" component={PrintQrCode} />
      </Stack.Navigator>
    );
  }