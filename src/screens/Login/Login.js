import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { COLORS } from '../../constants';

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='Home' onPress={() => navigation.navigate("Home")} />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        marginTop: 48,
    },
})

export default Login;