import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import styles from '../../qrCodeStyle';
import {theme} from '../../../../../../core/theme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const QrCodeItem = ({ qrCode, index, printQrCode }) => {
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
            <Pressable onPress={() => printQrCode(index)}>
                <SimpleLineIcons name="size-fullscreen" size={18} color={theme.colors.primary} />
            </Pressable>
        </View>
    )
}

export default QrCodeItem