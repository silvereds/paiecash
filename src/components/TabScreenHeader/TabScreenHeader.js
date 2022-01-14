import React, {useState} from "react";
import {Pressable, StyleSheet, TextInput, TouchableOpacity, View,} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function TabScreenHeader({
                                    leftComponent,
                                    isSearchBtnVisible,
                                    isAddBtnVisible,
                                    onAddBtnPress,
                                }) {
    const [data, setData] = useState({isSearchFieldVisible: false});

    const toggleSearchField = () => {
        let {isSearchFieldVisible} = data;
        isSearchFieldVisible = !isSearchFieldVisible;
    };

    return (
        <View style={styles.headerContainer}>
            {leftComponent()}
            <View style={styles.headerRightContainer}>
                {isSearchBtnVisible ? (
                    <View style={styles.searchContainer}>
                        {data?.isSearchFieldVisible ? (
                            <View style={styles.searchInputWrapper}>
                                <TextInput
                                    placeholder="Search"
                                    style={styles.searchInputField}
                                    placeholderTextColor={appTheme.INACTIVE_COLOR}
                                />
                                <TouchableOpacity onPress={() => toggleSearchField()}>
                                    <MaterialIcons name="close" size={20} color={appTheme.INACTIVE_COLOR}/>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity onPress={() => toggleSearchField()}>
                                <Feather name="search" size={22} color="#393939"/>
                            </TouchableOpacity>
                        )}
                    </View>
                ) : null}
                {isAddBtnVisible ? (
                    <Pressable style={styles.searchContainer} onPress={() => onAddBtnPress()}>
                        <Ionicons name="add-circle" size={22} color='#393939' />
                    </Pressable>
                ) : null}
                {/*{isMoreBtnVisible ? (*/}
                {/*    <Menu>*/}
                {/*        <MenuTrigger>*/}
                {/*            <Feather name="more-vertical" size={22} color="#000" />*/}
                {/*        </MenuTrigger>*/}
                {/*        <MenuOptions>*/}
                {/*            <MenuOption>*/}
                {/*                <Text style={styles.menuOptionText}>Settings</Text>*/}
                {/*            </MenuOption>*/}
                {/*            <MenuOption>*/}
                {/*                <Text style={styles.menuOptionText}>Log out</Text>*/}
                {/*            </MenuOption>*/}
                {/*        </MenuOptions>*/}
                {/*    </Menu>*/}
                {/*) : null}*/}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    headerRightContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer: {
        marginRight: 15,
        height: 35,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuOptionText: {
        fontSize: 16,
        paddingLeft: 7,
        paddingVertical: 3,
    },
    searchInputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 170,
        paddingHorizontal: 7,
        height: 35,
    },
    searchInputField: {
        fontSize: 15,
        height: 40,

    },
});