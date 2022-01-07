import React, {useContext} from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import Button from "../../../components/Button";
import useAsyncData from "../../../services/DataStorage/UseAsyncData";
import AuthentificationContext from "../../../context/AuthentificationContext";
import Carousel from "react-native-snap-carousel";
import CreditCardDisplay from "react-native-credit-card-display/src/index";

/**
 * @author Jaures Kano <ruddyjaures@gmail.com>
 */
export default function ProfileTabScreens({navigation}) {
    const {authData, setAuthData} = useContext(AuthentificationContext)
    const {data, removeStorage} = useAsyncData('data')

    const renderDarkItem =  ({}) =>  {
        return   <View>
            <CreditCardDisplay
                cardTypeIcon="amex"
                number={424242444242}
                cvc={123}
                expiration="04/21"
                name="John J. Doe"
                since="2004"
            />
        </View>
    }

    return (
        <SafeAreaView style={{width: '100%'}}>
            <ScrollView style={{width: '100%', padding: 10}}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        directionalLockEnabled={false}
                        disableScrollViewPanResponder
                        nestedScrollEnabled
                        removeClippedSubviews={false}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <Text>
                        Profile
                    </Text>
                    <Button mode="outlined" onPress={() => {
                        removeStorage()
                        setAuthData({})
                        navigation.reset({
                            index: 0,
                            routes: [{name: 'StartScreen'}],
                        })
                    }}>
                        Deconnexion
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Carousel
                        data={ENTRIES1}
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
                        loop={true}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const entryBorderRadius = 8;

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
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