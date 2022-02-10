import React from 'react';
import {theme} from "../../../core/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default actions = [
    {
        title : 'Recharge',
        route : 'Recharge',
        icon : <Ionicons name="cash-outline" size={22} color={theme.colors.primary}/>
    },
    {
        title : 'Transfert',
        route : 'Transfer',
        icon : <SimpleLineIcons name="wallet" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Retrait',
        route : '',
        icon : <Ionicons name="share" size={22} color={theme.colors.primary}/>
    },
    {
        title : 'Historique',
        route : 'Historique',
        icon : <MaterialCommunityIcons name="history" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Paramettre',
        route : '',
        icon : <SimpleLineIcons name="settings" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Qr Code',
        route : 'QrCode',
        icon : <Ionicons name="qr-code-outline" size={22} color={theme.colors.primary}/>
    },
    {
        title : 'Supprimer',
        route : '',
        icon : <MaterialCommunityIcons name="logout" size={22} color={theme.colors.error} />
    }
]