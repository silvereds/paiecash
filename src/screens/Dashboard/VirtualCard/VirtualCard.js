import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "../ProfileTab/ProfileStyle";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import CardSlider from "../../../components/CardSlider/CardSlider";
import fakeCard from "../../../helpers/FakeCard";
import {theme} from "../../../core/theme";

function VirtualCard(props) {
    const [cardSelect, setCardSelect] = useState(fakeCard[0])

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
                        paddingBottom: 30,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 1},
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
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default VirtualCard;