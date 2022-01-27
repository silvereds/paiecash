import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabScreens from "./HomeTab/HomeTabScreens";
import QrCodeTabScreens from "./QrCodeTab/QrCodeTabScreens";
import ProfileTabScreens from "./ProfileTab/ProfileTabScreens";
import CustomTabBar from "../../Navigators/CustomTabBar";
import VirtualCard from "./VirtualCard/VirtualCard";
import Recharge from './VirtualCard/Recharge';
import Transfer from './VirtualCard/Transfer';
import Historique from './VirtualCard/Historique';
import QrCode from './VirtualCard/QrCode';
import TransfertCard from "./TransfertCard/TransfertCard";

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
            <Tab.Screen name="Transfert" component={TransfertCard}/>
            <Stack.Screen name="Carte" component={VirtualCard}/>

        </Tab.Navigator>
    );
}


export default function DashboardStack({navigation}) {
    return (
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Recharge" component={Recharge} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Historique" component={Historique} />
        <Stack.Screen name="QrCode" component={QrCode} />
      </Stack.Navigator>
    );
  }