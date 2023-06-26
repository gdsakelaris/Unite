import React from 'react';
import { View} from 'react-native';
import { loginBox as styles } from '../css';
const LoginBox = ({children}) => (
  <View style={styles.loginBox}>
    {children}
  </View>
)
export default LoginBox;