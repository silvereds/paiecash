import React from 'react';
import {Dimensions, Image, Platform, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import CreditCardDisplay from "react-native-credit-card-display/src/index";
import Paragraph from "../Paragraph";
import Svg from 'react-native-svg';
import styles, { itemWidth, sliderWidth } from './CardSliderStyle';

export default function CardSlider({ dataCard = [], setData}) {

    const renderDarkItem = ({item}) => {
        return <View style={{width: '100%'}}>
            <CreditCardDisplay
                style={{width: '100%'}}
                number={item.credit_card_number}
                cvc={item.cvv}
                expiration={item.expiry_date}
                name={item.card_holder_name}
                since="2004"
            />
        </View>
    }

    return (
        <View style={{ flex: 1 }}>
            {dataCard.length === 0 ?
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 20,
                }}>
                    <Svg width="80" height="80">
                        <Image href={require('../../assets/carte-empty.svg')} />
                    </Svg>
                    <Paragraph>Aucune carte</Paragraph>
                </View>
            :
                <Carousel
                    data={dataCard}
                    nestedScrollEnabled
                    layout={'stack'}
                    layoutCardOffset={18}
                    renderItem={renderDarkItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    containerCustomStyle={styles.slider}
                    activeSlideAlignment={'center'}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    onSnapToItem={(e) => setData(dataCard[e])}
                />
            }
        </View>
    );
}

