import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabScreens from "./HomeTab/HomeTabScreens";
import QrCodeTabScreens from "./QrCodeTab/QrCodeTabScreens";
import ProfileTabScreens from "./ProfileTab/ProfileTabScreens";
import {theme} from "../../core/theme";
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from "../../Navigators/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function Dashboard({navigation}) {

    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            initialRouteName="Acceuil"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="Acceuil"
                component={HomeTabScreens}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="grid-outline" color={color} size={size}/>
                    ),
                }}/>
            <Tab.Screen
                name="Scan"
                component={QrCodeTabScreens}
                options={{
                    tabBarLabel: 'Qr Code',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="qr-code-outline" color={color} size={size}/>
                    ),
                }}/>
            <Tab.Screen
                name="Profile"
                component={ProfileTabScreens}/>
        </Tab.Navigator>
    );
}
