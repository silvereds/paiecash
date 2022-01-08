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
import TaskInfo from "./components/TaskInfo";
import AuthentificationContext from "../../../context/AuthentificationContext";

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
                                <Text style={styles.projectDescription}>{authData.user?.email}</Text>
                                <Text style={styles.projectDescription}>{authData.user?.phone}</Text>
                                <Text style={{
                                    color: theme.colors.error,
                                    width: '100%',
                                    marginBottom: 5
                                }}>
                                    Profile non certifier</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: 'space-around',
                            alignItems: 'space-around'
                        }}>
                            <View style={{width: '40%'}}>
                                <Text style={styles.projectStatus}>
                                    Envoie
                                </Text>
                            </View>
                            <View style={{width: '40%'}}>
                                <Text style={styles.projectStatus}>
                                    Retrait
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.projectBody}>
                        <Text style={{
                            color: theme.colors.disabled,
                            fontWeight: 'bold', fontSize: 20, marginBottom: 10
                        }}>Service</Text>
                        <View style={styles.bottomContainer}>
                            <View style={styles.bottomContent}>
                                {tasks?.map(task => (
                                    <TaskInfo task={task} key={0}/>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}