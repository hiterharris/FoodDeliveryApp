import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, icons } from '../../constants';
import { Header } from '../../components';
import MapView from 'react-native-maps';
import { initialCurrentLocation } from '../../assets/data';

const Map = ({ navigation }) => {

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Header title={initialCurrentLocation.streetName} clickHandlerLeft={goBack} clickHandlerRight={() => navigation.navigate("Cart", {cart: []})} iconLeft={icons.back} />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        marginTop: 48,
    },
    map: {
        flex: 1,
    }
})

export default Map;