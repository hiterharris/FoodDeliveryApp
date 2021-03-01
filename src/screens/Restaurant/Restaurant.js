import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { icons, COLORS, SIZES, FONTS } from '../../constants';
import { Header } from './components/Header';

const Restaurant = ({ route }) => {

    const [restaurant, setRestaurant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        let { item, currentLocation } = route.params;

        setRestaurant(item)

        setCurrentLocation(currentLocation)
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Header currentLocation={currentLocation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    }
})

export default Restaurant;