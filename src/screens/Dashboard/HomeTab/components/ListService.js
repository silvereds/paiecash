import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {theme} from "../../../../core/theme";
import {DATA} from "./DataService";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

const stylesComponent = StyleSheet.create({
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
    taskDesc: {
        color: theme.colors.disabled,
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

export default ListService;