import React from 'react';
import { View} from 'react-native';
import { loginBox as styles } from '../css';
const InputBox = ({children}) => (
  <View style={styles.loginBox}>
    {children}
  </View>
)
export default InputBox;