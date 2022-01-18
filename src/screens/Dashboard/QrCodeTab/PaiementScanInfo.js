import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../core/theme";
import {ActivityIndicator} from 'react-native-paper';
import {APPENV} from "../../../core/config";

function PaiementScanInfo({loading, searchData, data, dataFetch, setData}) {

    useEffect(() => {
        searchData(`?code=${data}&api_key=${APPENV.apiKey}`)
        return () => dataFetch
    }, []);

    return (
        <View style={styles.profileDetailsSection}>
            {loading ?
                <ActivityIndicator animating={true} style={{padding: 30}}
                                   color={theme.colors.primary} size={'large'}/>
            :
                <View>
                    <View style={styles.profileInfoSection}>
                        {dataFetch.id !== undefined && <Image
                            style={styles.profilePhoto}
                            source={require('../../../assets/icon.png')}
                        />}
                        <View style={styles.statisticsContainer}>
                            {dataFetch.cardId === undefined ?
                                <>
                                    <Text style={styles.statisticsText}>
                                        {dataFetch.id === undefined ? 'QR CODE INCONNU' : 'JAURES KANO'}
                                    </Text>
                                    <Text style={styles.statisticsTitle}>
                                        {dataFetch.id === undefined ?
                                            'Ce qr code n\'est pas dans le reseau paiecash'
                                            : 'Personnal account'}
                                    </Text>
                                </>
                                :
                                <>
                                    <Text style={styles.statisticsText}>
                                        {`${dataFetch.owner?.firstName.toUpperCase()}  ${dataFetch.owner?.lastName.toUpperCase()}`}
                                    </Text>
                                    <Text style={styles.statisticsTitle}>
                                        {dataFetch.owner?.email}
                                    </Text>
                                </>
                            }
                        </View>
                    </View>
                    <View style={styles.profileCenterSection}>
                        {dataFetch.cardId === undefined ?
                            <TouchableOpacity style={styles.editProfileWrapper} onPress={() => setData('')}>
                                <Text style={styles.editProfileText}>Scanner a nouveau</Text>
                            </TouchableOpacity>
                            :
                            null
                        }
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    profileDetailsSection: {
        paddingTop: 40,
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
    },
    profileInfoSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    profilePhoto: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    statisticsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    statisticsText: {
        color: theme.colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    statisticsTitle: {
        fontSize: 15,
        color: theme.colors.text,
    },
    profileCenterSection: {
        display: 'flex',
        alignItems: 'center',
    },
    nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
    designationText: {
        fontSize: 12,
        color: theme.colors.text,
        marginBottom: 20,
    },
    editProfileWrapper: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 25,
        borderRadius: 5,
        paddingVertical: 10,
    },
    editProfileText: {
        color: '#fff',
    },
    exploreSection: {
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    exploreHeader: {
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize: 14,
    },
    exploreContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    singleExplore: {
        height: 80,
        width: '28%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: '#fff',
        margin: 1,
        marginBottom: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    exploreText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: theme.colors.primary,
    },
});


export default PaiementScanInfo;