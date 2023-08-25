/**
 * @file InputBox.js
 * @description This file makes a component that stores input fields for the login or signup screens.
 */

import React from 'react';
import { View} from 'react-native';
import { inputBox as styles } from '../css';
const InputBox = ({children, style}) => (
  <View style={[styles.inputBox, style]}>
    {children}
  </View>
)
export default InputBox;