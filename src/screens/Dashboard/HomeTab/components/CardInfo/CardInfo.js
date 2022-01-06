import React, {useContext} from 'react';
import {Image, ImageBackground, StyleSheet} from "react-native";
import {Avatar, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {theme} from "../../../../../core/theme";
import AuthentificationContext from "../../../../../context/AuthentificationContext";

const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function CardInfo(props) {
    const {authData} = useContext(AuthentificationContext)

    return (
        <Card style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../../../../../assets/carte.png')}>
                <Card.Title titleStyle={styles.cardTitle}
                            title="PAIECASH"
                            rightStyle={{height: 50, width: 50}}
                            right={(props) => <IconButton {...props} icon={({size, color}) => (
                                <Image
                                    style={{height: size, width: size}}
                                    source={require('../../../../../assets/logo-blanc.png')}
                                />
                            )} onPress={() => {
                            }}/>}/>
                <Card.Content>
                    <Title style={styles.name}>{authData.user?.firstName} {authData.user?.lastName}</Title>
                    <Paragraph style={styles.name}>{authData.user?.email}</Paragraph>
                </Card.Content>
            </ImageBackground>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: theme.colors.primary
    },
    imageBackground: {
        borderRadius: 10,
        overflow: 'hidden',
        padding: 5
    },
    cardTitle: {
        color: '#fff',
        marginTop: -10
    },
    name: {
        color: '#fff'
    },
    paragraph: {
        fontWeight: 'bold',
        color: '#fff'
    },
});