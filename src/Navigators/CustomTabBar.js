import React, {useState} from 'react';
import {TouchableOpacity, View} from "react-native";
import styles from "./NavigatorStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {theme} from "../core/theme";

const BottomTab = createBottomTabNavigator();

export default  function CustomTabBar(props) {
    const [data, setData] = useState({activeNavTab: 'Dashboard'});

    const handleNavigation = route => {
        // setData(combineData(data, {activeNavTab: route}));
        // props?.navigation.navigate(route);
    };

    const getColor = title => {
        let color;
        if (title === data?.activeNavTab) {
            color = theme.colors.primary;
        } else {
            color = theme.colors.disabled;
        }
        return color;
    };


    return (
        <View style={styles.menuWrapper}>
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => handleNavigation('Dashboard')}>
                    <Ionicons name="ios-menu" size={32} color={getColor('Dashboard')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('Projects')}>
                    <Ionicons
                        name="ios-document-text"
                        size={25}
                        color={getColor('Projects')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.plusBtnContainer}
                    onPress={() => handleNavigation('CreateProject')}>
                    <MaterialCommunityIcons name="plus" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('Members')}>
                    <Feather name="send" size={25} color={getColor('Members')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('Profile')}>
                    <MaterialIcons
                        name="account-circle"
                        size={25}
                        color={getColor('Profile')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}