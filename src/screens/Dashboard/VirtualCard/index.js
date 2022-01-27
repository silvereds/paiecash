import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../ProfileTab/ProfileStyle";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import CardSlider from "../../../components/CardSlider/CardSlider";
import {theme} from "../../../core/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {APPENV} from "../../../core/config";
import useFetchApi from "../../../helpers/fetchApi/useFetchApi";
import AuthentificationContext from "../../../context/AuthentificationContext";
import Toast from "react-native-toast-message";

function VirtualCard(props) {
    const {authData} = useContext(AuthentificationContext)
    const {
        data : {cards},
        loading,
        searchData,
        status,
        error
    } = useFetchApi(APPENV.domain + '/api/card/list')
    const [cardSelect, setCardSelect] = useState(cards?cards[0]:null)

    useEffect(() => {
        if(status >= 400 && status <= 600) {
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
        if(cards!==undefined && cardSelect===null)
            setCardSelect(cards[0])
    })
    console.log('cards',cards);
    console.log('cardSelect',cardSelect);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fafafa',
        }}>
            <TabScreenHeader
                leftComponent={() => <Text style={styles.headerTitle}>Vos cartes virtuelle</Text>}
                isSearchBtnVisible={true}
                isMoreBtnVisible={true}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{
                        paddingTop: 10,
                        backgroundColor: '#fff',
                        paddingHorizontal: 16,
                        borderBottomStartRadius: 30,
                        borderBottomEndRadius: 30,
                        paddingBottom: 20,
                        shadowColor: '#000',
                        shadowOffset: {width: 0.8, height: 2},
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 1,
                    }}>
                        <View style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                            <CardSlider dataCard={cards} setData={setCardSelect}/>

                            <View>
                                <Text style={{color: theme.colors.primary, fontSize: 35, fontWeight: 'bold'}}>
                                    {cardSelect?.amount.toLocaleString() ?? 0} XAF
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.exploreSection}>
                            <Text style={styles.exploreHeader}>Sevices</Text>
                            <View style={styles.exploreContent}>
                                <TouchableOpacity style={styles.singleExplore} onPress={() => props?.navigation.navigate('Recharge',{card: cardSelect})}>
                                    <Ionicons name="cash-outline" size={22} color={theme.colors.primary}/>
                                    <Text style={styles.exploreText}>Recharge</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.singleExplore} onPress={() => props?.navigation.navigate('Transfer',{card: cardSelect})}>
                                    <SimpleLineIcons
                                        name="wallet" size={22}
                                        color={theme.colors.primary}
                                    />
                                    <Text style={styles.exploreText}>Transfert</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.singleExplore}>
                                    <Ionicons name="share" size={22} color={theme.colors.primary}/>
                                    <Text style={styles.exploreText}>Retrait</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.singleExplore} onPress={() => props?.navigation.navigate('Historique',{card: cardSelect})}>
                                    <MaterialCommunityIcons
                                        name="history"
                                        size={22}
                                        color={theme.colors.primary}
                                    />
                                    <Text style={styles.exploreText}>Historique</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.singleExplore}>
                                    <SimpleLineIcons
                                        name="settings" size={22}
                                        color={theme.colors.primary}
                                    />
                                    <Text style={styles.exploreText}>Paramettre</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.singleExplore}  onPress={() => props?.navigation.navigate('QrCode',{card: cardSelect})}>
                                    <Ionicons name="qr-code-outline" size={22} color={theme.colors.primary}/>
                                    <Text style={styles.exploreText}>Qr code</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.singleExplore}>
                                    <MaterialCommunityIcons
                                        name="logout"
                                        size={22}
                                        color={theme.colors.error}
                                    />
                                    <Text style={styles.exploreText}>Supprimer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default VirtualCard;