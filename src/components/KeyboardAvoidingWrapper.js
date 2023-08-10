// this wrapper makes sure all the children inside it such as text input will not be overlayed by the virtual keyboard
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { keyboardAvoidingWrapper  as styles } from './css';
const KeyboardAvoidingWrapper = ({children}) => (
  <KeyboardAvoidingView style={styles.container} behavior="height">
      {children}
  </KeyboardAvoidingView>
)
export default KeyboardAvoidingWrapper;