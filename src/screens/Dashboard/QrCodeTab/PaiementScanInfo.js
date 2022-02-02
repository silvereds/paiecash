import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
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

export default PaiementScanInfo;