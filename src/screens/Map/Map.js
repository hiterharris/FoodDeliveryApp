import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, icons } from '../../constants';
import { Header } from '../../components';
import MapView from 'react-native-maps';
import { initialCurrentLocation } from '../../assets/data';

const Map = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header
                title={initialCurrentLocation.streetName}
                clickHandlerLeft={() => navigation.goBack()}
                clickHandlerRight={() => navigation.navigate("Cart", {cart: []})}
                iconLeft={icons.back} />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 35.227085,
                    longitude: -80.843124,
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