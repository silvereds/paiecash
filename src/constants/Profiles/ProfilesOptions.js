import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {COLORS } from '../theme';
export default actions = [
    {
        title:"Localisation" ,
        subtitle:"subtitle",
        route:"",
        icon:<Icon name="map-marker-alt" size={30} color={COLORS.lightGreen} />
    },
    {
        title:"Profile" ,
        subtitle:"subtitle",
        route:"",
        icon:<Icon name="map-marker-alt" size={30} color={COLORS.lightGreen} />
    },
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
        title : 'Profile',
        route : 'Certifiez Votre Profile',
        icon : <Icon name="user-check" size={22} color={theme.colors.primary} />
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