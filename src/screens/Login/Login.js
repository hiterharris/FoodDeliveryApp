import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FONTS } from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.signup}>Sign Up</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00BAFF',
        paddingTop: 48,
    },
    title: {
        ...FONTS.h1,
        color: 'white',
        padding: 20,
    },
    input: {
        backgroundColor: 'white',
        width: 250,
        height: 50,
        margin: 5,
        borderRadius: 10,
        padding: 10,
    },
    button: {
        width: 150,
        margin: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    buttonText: {
        color: 'white',
        ...FONTS.h3,
        textAlign: 'center',
        padding: 10,
    },
    signup: {
        color: 'white',
        ...FONTS.h4,
    }
})

export default Login;