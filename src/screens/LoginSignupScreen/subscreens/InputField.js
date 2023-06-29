import React from 'react';
import { TextInput } from 'react-native';
import { inputField as styles } from '../css';
const InputField = ({...textInputProps}) => (
  <TextInput {...textInputProps} style={styles.input}/>
)
export default InputField;