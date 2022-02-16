import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {connect} from 'react-redux';
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
import {REFRESH_CARDS_LIST} from '../../../redux/card/constants';


function VirtualCard(props) {
    const {authData} = useContext(AuthentificationContext)
    const { data: dataCards, loading, searchData, status, error} = useFetchApi(APPENV.domain + '/api/card/list');

    const [cardSelect, setCardSelect] = useState(props.cards ? props.cards[0] : null)

    useEffect(() => {
        if (status >= 400 && status <= 600) {
            Toast.show({
                type: 'error',
                text2: error.message
            });
        }
        else {
            if (props.cards !== dataCards.cards)
                props.refreshCardsList(dataCards);
            if (dataCards.cards && cardSelect === undefined)
                setCardSelect(dataCards.cards[0])
        }
    }, [error, dataCards])

    useEffect(() => {
        searchData(`?access_token=${authData.token}&api_key=${APPENV.apiKey}`)
    }, [])

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
                            <CardSlider dataCard={props.cards} setData={setCardSelect}/>

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

const mapStateToProps = ({Card}) => {
  const {cards} = Card;
  return {cards};
};

const mapDispatchToProps = dispatch => {
  return {
    refreshCardsList: dataCards => dispatch({type: REFRESH_CARDS_LIST, payload: dataCards}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VirtualCard)