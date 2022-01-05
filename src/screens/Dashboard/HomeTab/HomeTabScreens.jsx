import React from 'react';
import CardInfo from "./components/CardInfo/CardInfo";
import ServicesList from "./components/Services/ServicesList";
import HistoryBloc from "./components/HistoryBloc/HistoryBloc";
import {SafeAreaView, ScrollView} from "react-native";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function HomeTabScreens(props) {

    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={{width: '100%', padding: 10}}>
                <CardInfo/>
                <HistoryBloc/>
                <ServicesList/>
            </ScrollView>
        </SafeAreaView>
    );
}
