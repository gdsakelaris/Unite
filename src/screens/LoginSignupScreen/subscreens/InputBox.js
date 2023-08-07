//this file will make a white box where it contains all the input fields for the login and sign up screen 
import React from 'react';
import { View} from 'react-native';
import { inputBox as styles } from '../css';
const InputBox = ({children, style}) => (
  <View style={[styles.inputBox, style]}>
    {children}
  </View>
)
export default InputBox;