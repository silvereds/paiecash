import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ProgressBar} from 'react-native-paper'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {theme} from "../../../../core/theme";

function TaskInfo({task}) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <AntDesign
                    name="checksquareo"
                    size={20}
                    color={task?.progress === 100 ? theme.colors.primary : theme.colors.secondary}
                    style={styles.taskProgressIndicator}
                />
                <View style={styles.taskMiddleColumn}>
                    <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">
                        {task?.title}
                    </Text>
                    <ProgressBar
                        progress={Number(task?.progress)}
                        color={task?.progress === 100 ? theme.colors.primary : theme.colors.secondary}
                        style={styles.taskProgressBar}
                    />
                </View>
                <View style={styles.teamWrapper}>
                    {task?.members?.slice(0, 2)?.map(member => (
                        <Image
                            key={1}
                            style={styles.memberPhoto}
                            source={{uri: member?.photo}}
                        />
                    ))}
                </View>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={25}
                    color={theme.colors.disabled}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        height: 70,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        margin: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskProgressIndicator: {marginRight: 10},
    taskMiddleColumn: {width: '50%', marginRight: 'auto'},
    taskTitle: {
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: 3,
    },
    taskProgressBar: {borderRadius: 7, height: 6},
    teamWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginRight: 10,
    },
    memberPhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginLeft: -10,
    },
});


export default TaskInfo;