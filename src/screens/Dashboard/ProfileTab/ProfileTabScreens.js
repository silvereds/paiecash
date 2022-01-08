import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image} from "react-native";
import useAsyncData from "../../../services/DataStorage/UseAsyncData";
import AuthentificationContext from "../../../context/AuthentificationContext";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./ProfileStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {theme} from "../../../core/theme";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Toast from "react-native-toast-message";

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
        // navigateToNestedRoute(getScreenParent(screen), screen, params);
    };

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
                            <TouchableOpacity style={styles.singleExplore}
                                              onPress={() => handleNavigation('Onboarding')}>
                                <Ionicons name="cash-outline" size={22} color={theme.colors.primary} />
                                <Text style={styles.exploreText}>Cartes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.singleExplore}
                                              onPress={() => handleNavigation('Onboarding')}>
                                <MaterialCommunityIcons
                                    name="crown"
                                    size={22}
                                    color={theme.colors.primary}
                                />
                                <Text style={styles.exploreText}>Abonnement</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.singleExplore}
                                              onPress={() => handleNavigation('Onboarding')}>
                                <Ionicons name="qr-code-outline" size={22} color={theme.colors.primary} />
                                <Text style={styles.exploreText}>QR code</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.singleExplore}
                                              onPress={() => handleNavigation('Onboarding')}>
                                <Ionicons name="link" size={22} color={theme.colors.primary} />
                                <Text style={styles.exploreText}>Parainage</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.singleExplore}
                                              onPress={() => handleNavigation('Onboarding')}>
                                <SimpleLineIcons
                                    name="settings" size={22}
                                    color={theme.colors.primary}
                                />
                                <Text style={styles.exploreText}>Paramettre</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.singleExplore}
                                onPress={() => {
                                    navigation.navigate('StartScreen')
                                    setAuthData({})
                                }}>
                                <MaterialCommunityIcons
                                    name="logout"
                                    size={22}
                                    color={theme.colors.primary}
                                />
                                <Text style={styles.exploreText}>Deconnexion</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}