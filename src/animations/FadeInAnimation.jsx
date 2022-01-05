import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

export default function FadeInAnimation(props){
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.spring(
            fadeAnim,
            {
                toValue:450,
                duration:2000,
                friction:1,
                tension:20,
                useNativeDriver:true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}