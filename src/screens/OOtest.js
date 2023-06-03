import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Perform authentication logic here, e.g. calling an API
    axios.post('http://75.102.242.221:5000/login', {
      email,
      password
    })
      .then(response => {
        // If authentication succeeds, call the onLogin function to set the isLoggedIn state to true
        onLogin();
      })
      .catch(error => {
        // Show an error message
        Alert.alert('Error', 'Could not log in. Please check your credentials.');
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}
