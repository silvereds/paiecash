import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {TabScreenHeader} from "../../../components/TabScreenHeader/TabScreenHeader";
import styles from "../ProfileTab/ProfileStyle";
import CardSlider from "../../../components/CardSlider/CardSlider";
import fakeCard from "../../../helpers/FakeCard";
import {theme} from "../../../core/theme";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

function TransfertCard(props) {
    const [cardSelect, setCardSelect] = useState(fakeCard[0])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fafafa',
        }}>
            <TabScreenHeader
                leftComponent={() => <Text style={styles.headerTitle}>Transfert</Text>}
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
                            <View style={{width: '100%'}}>
                                <TextInput
                                    label="Email ou numero de telephone du destinataire"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                />

                            </View>
                            <View style={{width: '100%'}}>
                                <TextInput
                                    label="Numero de la carte"
                                    returnKeyType="done"
                                />
                            </View>
                            <View style={{width: '100%'}}>
                                <Button mode="contained">
                                    Verifier
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>

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
                <View style={{
                    width: '100%',
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
                    <Button mode="contained">
                        Payer
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TransfertCard;