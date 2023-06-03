import React, { useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import UniteLogo from '../images/Unite_Logo.png';

const LoginScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Insert your IP below
        axios.post('http://<Your IP>:5000/login', {
            email,
            password
        })
            .then(response => {
                console.log(response.data);
                onLogin(); 
            })
            .catch(error => {
                Alert.alert('Error', 'Could not log in. Please check your credentials.');
                console.log(error);
            });
    };

    return (
        <View style={styles.container}>
            <Image source={UniteLogo} style={styles.logo} />

            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#0066cc',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    signupText: {
        marginTop: 20,
        color: '#0066cc',
        fontSize: 18,
        textDecorationLine: 'underline'
    }
});

export default LoginScreen;
