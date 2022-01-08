import React from 'react';
import Carousel from "react-native-snap-carousel";
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../../../core/theme";
import ItemCardPartenaires from "./ItemCardPartenaires";

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

const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const entryBorderRadius = 8;

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 0.5;


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
        shadowOffset: {width: 0, height: 10},
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
    },
    singleExplore: {
        height: 150,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: '#fff',
        margin: 1,
        marginBottom: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    }
});

export default Partenaires;