//this file will make a login button component for the login screen
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import handleLogin from '../../../utils/handleLogin';
const LoginBtn = ({onLogin, email, password}) => (
  <TouchableOpacity style={styles.button} onPress={() => handleLogin(onLogin, email, password)}>
    <Text style={styles.buttonText}>Log in</Text>
  </TouchableOpacity>
)
export default LoginBtn;