import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { icons } from '../../constants';
import { Header } from '../../components';


const Cart = ({ navigation }) => {

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Cart'} goBack={goBack} icon={icons.back} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Cart;
