import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../ProfileTab/ProfileStyle";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import CardSlider from "../../../components/CardSlider/CardSlider";
import fakeCard from "../../../helpers/FakeCard";
import {theme} from "../../../core/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

function VirtualCard(props) {
    const [cardSelect, setCardSelect] = useState(fakeCard[0])

    console.log(cardSelect)
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
                            <CardSlider dataCard={fakeCard} setData={setCardSelect}/>

                            <View>
                                <Text style={{color: theme.colors.primary, fontSize: 35, fontWeight: 'bold'}}>
                                    {cardSelect?.montant.toLocaleString() ?? 0} XAF
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.exploreSection}>
                            <Text style={styles.exploreHeader}>Sevices</Text>
                            <View style={styles.exploreContent}>
                                <TouchableOpacity style={styles.singleExplore}>
                                    <Ionicons name="cash-outline" size={22} color={theme.colors.primary}/>
                                    <Text style={styles.exploreText}>Recharge</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.singleExplore}>
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
                                <TouchableOpacity style={styles.singleExplore}>
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
                                <TouchableOpacity style={styles.singleExplore}>
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