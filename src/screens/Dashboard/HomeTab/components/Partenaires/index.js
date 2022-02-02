import React from 'react';
import Carousel from "react-native-snap-carousel";
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../../core/theme";
import ItemCardPartenaires from "./ItemCardPartenaires";
import styles from './PartenairesStyle';

function Partenaires(props) {

    const renderDarkItem = ({}) => {
        return <TouchableOpacity style={styles.singleExplore} onPress={() => null}>
            <ItemCardPartenaires/>
        </TouchableOpacity>
    }

    return (
        <View style={{
            flex: 1, paddingTop: 5,
            paddingHorizontal: 16,
        }}>
            <View>
                <Text style={{
                    color: theme.colors.disabled,
                    fontWeight: 'bold', fontSize: 20
                }}>Il utilise paiecash</Text>
            </View>
            <Carousel
                data={[{}, {}, {}, {}]}
                nestedScrollEnabled
                renderItem={renderDarkItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                activeSlideAlignment={'center'}
                contentContainerCustomStyle={styles.sliderContentContainer}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
            />
        </View>

    );
}

export default Partenaires