import React from 'react';
import {Dimensions, Image, Platform, StyleSheet, Text, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import CreditCardDisplay from "react-native-credit-card-display/src/index";
import Paragraph from "../Paragraph";
import Svg from 'react-native-svg';


export default function CardSlider({ dataCard = [], setData}) {

    const renderDarkItem =  ({}) =>  {
        return   <View style={{ width: '100%' }}>
            <CreditCardDisplay
                style={{ width: '100%' }}
                number={123155512223551551}
                cvc={321}
                expiration="04/212"
                name="John J. Doe"
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
                    layoutCardOffset={`18`}
                    renderItem={renderDarkItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    containerCustomStyle={styles.slider}
                    activeSlideAlignment={'center'}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    onSnapToItem={(e) => console.log(e)}
                />
            }
        </View>
    );
}

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const entryBorderRadius = 8;

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


const styles = StyleSheet.create({
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: '#000'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: '#000'
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: '#000'
    },
    title: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: '#000',
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
});

