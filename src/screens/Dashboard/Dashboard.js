import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabScreens from "./HomeTab/HomeTabScreens";
import QrCodeTabScreens from "./QrCodeTab/QrCodeTabScreens";
import ProfileTabScreens from "./ProfileTab/ProfileTabScreens";
import CustomTabBar from "../../Navigators/CustomTabBar";
import VirtualCard from "./VirtualCard/VirtualCard";
import TransfertCard from "./TransfertCard/TransfertCard";

const Tab = createBottomTabNavigator();

export default function Dashboard({navigation}) {

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
            <Tab.Screen name="Carte" component={VirtualCard}/>
        </Tab.Navigator>
    );
}
