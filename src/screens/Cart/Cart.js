import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons } from '../../constants';
import { Header } from '../../components';
import { useSelector } from 'react-redux';

const Cart = ({ route, navigation }) => {
    
    const cart = useSelector(state => state.cartReducer.cart)

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Cart'} clickHandlerLeft={goBack} iconLeft={icons.back} />
            <View>
                {cart?.map((item, index) => {
                    return (
                        <View style={{margin: 5}}>
                            <Image source={item.photo} style={{width: 100, height: 100}}/>
                            <Text>{item.name}</Text>
                            <Text>Qty: {item.qty}</Text>
                            <Text>Price: ${item.price}</Text>
                            <Text>Total: ${item.total}</Text>
                        </View>
                    )
                })}
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
                    onPress={() => navigation.navigate("OrderDelivery")}
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
