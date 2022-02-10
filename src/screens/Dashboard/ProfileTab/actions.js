import React from 'react';
import {theme} from "../../../core/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default actions = [
    {
        title : 'Abonnement',
        route : 'Onboarding',
        icon : <MaterialCommunityIcons name="crown" size={22} color={theme.colors.primary} />
    },
    {
        title : 'QR Code',
        route : 'Onboarding',
        icon : <Ionicons name="qr-code-outline" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Parainage',
        route : 'Onboarding',
        icon : <Ionicons name="link" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Paramètre',
        route : 'Onboarding',
        icon : <SimpleLineIcons name="settings" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Paramettre',
        route : 'Onboarding',
        icon : <SimpleLineIcons name="settings" size={22} color={theme.colors.primary} />
    },
    {
        title : 'Deconnexion',
        route : 'StartScreen',
        icon : <MaterialCommunityIcons name="logout" size={22} color={theme.colors.error} />
    }
]