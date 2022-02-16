import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import styles from '../../qrCodeStyle';
import {theme} from '../../../../../../core/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QrCodeItem = ({ qrCode, index, selectedItem, setSelectedItem }) => {
    if (selectedItem.index == index && selectedItem.showMore)
        return (
            <View style={styles.singleMemberMore}>
                <Image
                    style={styles.singleMemberPhotoMore}
                    source={require('../../../../../../assets/qrcode.png')}
                />
                <View style={styles.singleMemberInfoMore}>
                    <View>
                        <Text
                            style={styles.selectedMemberName}
                            numberOfLines={1}
                            ellipsizeMode="tail">
                            {qrCode?.designation}
                        </Text>
                        <Text style={styles.selectedMemberLastSeen}>{qrCode.Entreprise?qrCode.Entreprise:"Aucune entreprise"}</Text>
                    </View>

                    <Pressable
                        onPress={() => setSelectedItem({ index, showMore: false })}>
                        <Ionicons name="trash" size={18} color={theme.colors.error} />
                    </Pressable>
                </View>
                <Pressable onPress={() => setSelectedItem({ index, showMore: false })}>
                    <Ionicons
                        name="chevron-up-circle"
                        size={18}
                        color={theme.colors.primary}
                    />
                </Pressable>
            </View>
        );
    else
        return (
            <View style={styles.singleMember}>
                <Image
                    style={styles.singleMemberPhoto}
                    source={require('../../../../../../assets/qrcode.png')}
                />
                <View style={styles.singleMemberInfo}>
                    <Text
                        style={styles.selectedMemberName}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {qrCode?.designation}
                    </Text>
                    <Text style={styles.selectedMemberLastSeen}>{qrCode.Entreprise?qrCode.Entreprise:"Aucune entreprise"}</Text>
                </View>
                <Pressable onPress={() => setSelectedItem({ index, showMore: true })}>
                    <Ionicons
                        name="chevron-down-circle"
                        size={18}
                        color={theme.colors.primary}
                    />
                </Pressable>
            </View>
        );
}

export default QrCodeItem