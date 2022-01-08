import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
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
    console.log(tasks)

    const tabs = ['Task List', 'File', 'Comments'];

    const [data, setData] = useState({
        activeTab: 'Task List',
    });

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'All Tasks', value: 'All Tasks'},
        {label: 'Ongoing', value: 'Ongoing'},
        {label: 'Completed', value: 'Completed'},
    ]);

    const getTasks = () => {
        let tasksToRender = [];
        if (!value || value === 'All Tasks') {
            tasksToRender = tasks;
        } else if (value === 'Ongoing') {
            tasksToRender = tasks.filter(task => task.progress < 100) || [];
        } else if (value === 'Completed') {
            tasksToRender = tasks.filter(task => task.progress === 100) || [];
        }

        return tasks;
    };

    const handleBackButton = () => {
        navigation?.goBack();
    };

    const toggleTab = tab => {
        // setData(combineData(data, {activeTab: tab}));
    };

    const isActiveTab = tab => {
        const value = data?.activeTab === tab;
        return value;
    };

    const handleChangeTaskStatus = value => {
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <TabScreenHeader
                    leftComponent={() => (
                        <TouchableOpacity
                            onPress={() => handleBackButton()}
                            style={styles.backButton}>
                            <Ionicons name="arrow-back-outline" size={25} color="#000"/>
                        </TouchableOpacity>
                    )}
                    isSearchBtnVisible={true}
                    isMoreBtnVisible={true}
                />
                <View>
                    <View style={styles.projectDetailsSection}>
                        <View style={styles.projectTitleWrapper}>
                            <Text style={styles.projectTitle}>{project?.title}</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name="calendar-month-outline"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.projectDescription}>{project?.description}</Text>
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
                                <Text style={styles.projectTeamTitle}>Team</Text>
                                <View style={styles.projectTeamWrapper}>
                                    {project?.team?.map(member => (
                                        <Image
                                            key={1}
                                            style={styles.projectMemberPhoto}
                                            source={{uri: member?.photo}}
                                        />
                                    ))}
                                    <TouchableOpacity style={styles.plusBtnContainer}>
                                        <MaterialCommunityIcons name="plus" size={22} color="#fff"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.projectStatus}>{project?.status}</Text>
                    </View>
                    <View style={styles.projectBody}>
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