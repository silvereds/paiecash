import React from 'react';
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {theme} from "../../../../core/theme";
import {DATA} from "./DataService";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import stylesComponent from './ListServiceStyle';

function ListService({styles}) {

    return (
        <View style={styles.projectBody}>
            <Text style={{
                color: theme.colors.disabled,
                fontWeight: 'bold', fontSize: 20, marginBottom: 10
            }}>Service</Text>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomContent}>
                    {DATA.map((item, index) => (
                        <TouchableWithoutFeedback key={index}>
                            <View style={stylesComponent.container}>
                                <MaterialCommunityIcons
                                    name={item.icon}
                                    size={40}
                                    color={theme.colors.primary}
                                    style={stylesComponent.taskProgressIndicator}
                                />
                                <View style={stylesComponent.taskMiddleColumn}>
                                    <Text style={stylesComponent.taskTitle} numberOfLines={1} ellipsizeMode="tail">
                                        {item.title}
                                    </Text>
                                    <Text style={stylesComponent.taskDesc} numberOfLines={1} ellipsizeMode="tail">
                                        {item.desc}
                                    </Text>
                                </View>
                                <MaterialIcons
                                    name="keyboard-arrow-right"
                                    size={25}
                                    color={theme.colors.disabled}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default ListService