import React from 'react';
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

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HomeTabScreens({navigation}) {
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
                                    percent={project?.progress}
                                    radius={50}
                                    borderWidth={10}
                                    color={theme.colors.primary}
                                    shadowColor="#f4f4f4"
                                    bgColor="#fff">
                                    <Text style={styles.projectProgress}>{project?.progress}%</Text>
                                </ProgressCircle>
                            </View>
                            <View>
                                <View style={styles.projectTitleWrapper}>
                                    <Text style={styles.projectTitle}>{project?.title}</Text>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons
                                            name="shield-check"
                                            size={30}
                                            color={theme.colors.primary}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.projectDescription}>{project?.description}</Text>
                                <Text style={styles.projectDescription}>{project?.description}</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.projectStatus}>{project?.status}</Text>
                            <Text style={styles.projectStatus}>{project?.status}</Text>
                            <Text style={styles.projectStatus}>{project?.status}</Text>
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