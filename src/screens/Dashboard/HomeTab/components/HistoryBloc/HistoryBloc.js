import React from 'react';
import {Avatar, Button, Card} from 'react-native-paper';
import {StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HistoryBloc({navigation}) {

    return (
        <Card.Title
            title="Aucune operation"
            subtitle="xxxxxxxxx xxxxxxxxxxxx"
            right={(props) =>
                <Button {...props}
                        style={{height: 50, width: 20}}
                        contentStyle={{height: '100%', width: '100%', flexDirection: 'row-reverse'}}
                        mode="contained"
                        icon={({size, color}) => (
                            <MaterialCommunityIcons
                                name={'chevron-right'} color={color} size={40}/>
                        )} onPress={() => {
                }}/>}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        marginTop: 4,
        height: 50,
    },
    cardActionLeft: {
        width: '50%',
        color: 'white',
    },
    cardActionRight: {
        width: '50%',
        color: 'white',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
});
