import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Perform authentication logic here, e.g. calling an API
    // If authentication succeeds, call the onLogin function to set the isLoggedIn state to true
    onLogin();
  };

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}
