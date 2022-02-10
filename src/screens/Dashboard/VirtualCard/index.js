import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "../ProfileTab/ProfileStyle";
import {TabScreenHeader} from "../../../components/TabScreenHeader";
import CardSlider from "../../../components/CardSlider";
import {APPENV} from "../../../core/config";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import AuthentificationContext from "../../../context/AuthentificationContext";
import Toast from "react-native-toast-message";
import actions from './actions';
import Action from './Components/Action';
import shortid from 'shortid';


function VirtualCard(props) {
    const {authData} = useContext(AuthentificationContext)
    const { data: {cards}, loading, searchData, status, error } = useFetchApi(APPENV.domain + '/api/card/list')
    const [cardSelect, setCardSelect] = useState(cards ? cards[0] : null)

    useEffect(() => {
        if (status >= 400 && status <= 600) {
            Toast.show({
                type: 'error',
                text1: 'Erreur de connexion',
                text2: error.message
            });
        }
    }, [error])

    useEffect(() => {
        searchData(`?access_token=${authData.token}&api_key=${APPENV.apiKey}`)
    }, []);

    useEffect(() => {
        if (cards !== undefined && cardSelect === null)
            setCardSelect(cards[0])
    })

    return (
        <SafeAreaView style={styles.container}>
            <TabScreenHeader
                leftComponent={() => <Text style={styles.headerTitle}>Vos cartes virtuelle</Text>}
                isSearchBtnVisible={true}
                isMoreBtnVisible={true}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.scrollbarTop}>
                        <View style={styles.innerScrollbar}>
                            <CardSlider dataCard={cards} setData={setCardSelect}/>

                            <View>
                                <Text style={styles.textAmount}>
                                    {cardSelect?.amount.toLocaleString() ?? 0} XAF
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.exploreSection}>
                            <Text style={styles.exploreHeader}>Sevices</Text>
                            <View style={styles.exploreContent}>
                                {actions.map(action => <Action title={action.title} route={action.route} Icon={action.icon} navigation={props.navigation} cardSelect={cardSelect} key={shortid()} />)}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default VirtualCard;