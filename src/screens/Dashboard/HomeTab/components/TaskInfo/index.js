import React from 'react';
import {Text, TouchableWithoutFeedback, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {theme} from "../../../../../core/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function TaskInfo({task}) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="shield-check"
                    size={40}
                    color={theme.colors.primary}
                    style={styles.taskProgressIndicator}
                />
                <View style={styles.taskMiddleColumn}>
                    <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">
                        {task?.title}
                    </Text>
                    <Text style={styles.taskDesc} numberOfLines={1} ellipsizeMode="tail">
                        {task?.title}
                    </Text>
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

export default TaskInfo;