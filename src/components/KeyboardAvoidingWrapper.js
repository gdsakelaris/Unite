/**
 * A wrapper component that prevents children from being overlaid by the virtual keyboard.
 *
 * @function
 * @param {React.ReactNode} children - The children components to be wrapped.
 * @param {object} prop - Additional props to be passed to the KeyboardAvoidingView.
 * @returns {JSX.Element} - The wrapped component.
 */

import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { keyboardAvoidingWrapper  as styles } from './css';
const KeyboardAvoidingWrapper = ({children, ...prop}) => {

 return (
  <KeyboardAvoidingView style={styles.container} behavior="padding" {...prop}>
      {children}
  </KeyboardAvoidingView>)
  
}
export default KeyboardAvoidingWrapper;