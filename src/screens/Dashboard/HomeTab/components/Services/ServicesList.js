import React from 'react';
import {StyleSheet, View} from "react-native";
import {Avatar, Card} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {DATA} from "./DataService";
import {theme} from "../../../../../core/theme";
import Toast from "react-native-toast-message";

const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ServicesList(props) {

    return (
        <View style={{width: '100%', marginBottom: 100}}>
            {DATA.map((item, index) => <Item data={item} key={index}/>)}
        </View>
    );
}

const Item = ({data}) => {

    return (
        <Card style={styles.item}
              onPress={() => Toast.show({
                  type: 'info',
                  text1: 'Info',
                  text2: data.title + ' sera bientot disponible'
              })}>
            <Card.Title
                title={data.title}
                subtitle={data.desc}
                left={(props) => <MaterialCommunityIcons
                    name={data.icon} color={theme.colors.primary} size={35}/>}/>
        </Card>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    item: {
        marginTop: 3,
        marginBottom: 3,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: theme.colors.primary
    },
    title: {
        fontSize: 32,
    }
});