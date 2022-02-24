import React from 'react';
import Carousel from "react-native-snap-carousel";
import {Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../../../core/theme";
import ItemCard from "../ItemCard";
import styles, { itemWidth, sliderWidth } from './CardsStyle';

function Cards(props) {

    const renderDarkItem = ({}) => {
        return <TouchableOpacity style={styles.singleExplore} onPress={() => null}>
            <ItemCard/>
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
                }}>Choisissez une carte</Text>
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

export default Cards