import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import styles from "./HomeTabStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {theme} from "../../../core/theme";
import projectState from "../../../helpers/projectState";
import tasksState from "../../../helpers/taskState";
import AuthentificationContext from "../../../context/AuthentificationContext";
import ListService from "./components/ListService";
import Partenaires from "./components/Partenaires";
import Toast from "react-native-toast-message";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HomeTabScreens({navigation}) {
    const {authData} = useContext(AuthentificationContext)
    const project = projectState.projects[2];
    const tasks = tasksState.tasks;


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <TabScreenHeader
                    leftComponent={() => (
                        <TouchableOpacity style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                color: theme.colors.disabled,
                                fontSize: 20
                            }}>Paiecash</Text>
                        </TouchableOpacity>

                    )}
                    isSearchBtnVisible={true}
                    isMoreBtnVisible={true}
                />
                <View>
                    <View style={styles.projectDetailsSection}>
                        <View style={styles.projectTeamAndProgress}>
                            <View style={styles.projectProgressWrapper}>
                                <ProgressCircle
                                    percent={15}
                                    radius={35}
                                    borderWidth={10}
                                    color={theme.colors.error}
                                    shadowColor="#f4f4f4"
                                    bgColor="#fff">
                                    <Text style={styles.projectProgress}>15 %</Text>
                                </ProgressCircle>
                            </View>
                            <View>
                                <View style={styles.projectTitleWrapper}>

                                    <TouchableOpacity>
                                        <MaterialCommunityIcons
                                            name="account-alert"
                                            size={30}
                                            color={theme.colors.error}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.projectTitle}>
                                        {authData.user?.firstName} {authData.user?.lastName}
                                    </Text>
                                </View>
                                <Text style={{
                                    color: theme.colors.error,
                                    width: '100%',
                                    marginBottom: 5
                                }}>
                                    Profile non certifier
                                </Text>
                                <Text style={{
                                    color: theme.colors.error,
                                    width: '100%',
                                    marginBottom: 5
                                }}>
                                    Aucun abonnement
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: 'space-around',
                            alignItems: 'space-around'
                        }}>
                            <View style={{width: '100%'}}>
                                <TouchableOpacity onPress={() => Toast.show({
                                    type: 'info',
                                    text1: 'Vous devez remplir vos informations avant'
                                })}>
                                    <Text style={{
                                        borderRadius: 20,
                                        backgroundColor: theme.colors.primary,
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        color: theme.colors.textWhite,
                                    }}>
                                        Choisir un abonnement
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/*<View style={{width: '40%'}}>*/}
                            {/*    <Text style={styles.projectStatus}>*/}
                            {/*        Retrait*/}
                            {/*    </Text>*/}
                            {/*</View>*/}
                        </View>
                    </View>
                    <Partenaires/>
                    <ListService styles={styles}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}