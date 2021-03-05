import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons } from '../../constants';
import { Header } from '../../components';


const Cart = ({ route, navigation }) => {

    const { cart } = route.params;

    const cartItems = cart.length > 0 ? cart : []

    console.log(cartItems)

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Cart'} clickHandlerLeft={goBack} iconLeft={icons.back} />
                
                <View>
                    <Text>{cart?.name}</Text>
                    <Image
                        source={cart?.photo}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: SIZES.width * 0.9,
                            padding: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                        }}
                        onPress={() => navigation.navigate("OrderDelivery", {
                            restaurant: restaurant,
                            currentLocation: currentLocation
                        })}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Cart;
