import React, {useContext} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import useAsyncData from "../../../services/DataStorage/UseAsyncData";
import AuthentificationContext from "../../../context/AuthentificationContext";
import {TabScreenHeader} from "../../../components/TabScreenHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./ProfileStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {theme} from "../../../core/theme";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Toast from "react-native-toast-message";
import actions from './actions';
import Action from './Components/Action';
import shortid from 'shortid';

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ProfileTabScreens({navigation}) {
    const {authData, setAuthData} = useContext(AuthentificationContext)
    const {data, removeStorage} = useAsyncData('data')


    const handleNavigation = (screen, params) => {
        Toast.show({
            type: 'info',
            text1: 'Module bientot disponible'
        })
    };

    function logoutAction() {
        setAuthData({})
        navigation.navigate('StartScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TabScreenHeader
                leftComponent={() => (
                    <View style={styles.leftHeaderWrapper}>
                        <Text style={styles.headerTitle}>Profile</Text>
                    </View>
                )}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.profileDetailsSection}>
                        <View style={styles.profileInfoSection}>
                            <Image
                                style={styles.profilePhoto}
                                source={require('../../../assets/icon.png')}
                            />
                            <View style={styles.statisticsContainer}>
                                <Text style={styles.statisticsText}>EDGAR JAURES KANO</Text>
                                <Text style={styles.statisticsTitle}>Compte personnel</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.exploreSection}>
                        <Text style={styles.exploreHeader}>Module</Text>
                        <View style={styles.exploreContent}>
                            {actions.map(action => <Action title={action.title} route={action.route} Icon={action.icon} onPress={action.route==='StartScreen'?logoutAction:handleNavigation} key={shortid()} />)}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}