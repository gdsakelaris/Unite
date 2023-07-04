//this file will make input field component for the login and sign up screen. User can type their info into this text input and their info will be stored and sent to the database
import React from 'react';
import { TextInput } from 'react-native';
import { inputField as styles } from '../css';
const InputField = ({...textInputProps}) => (
  <TextInput {...textInputProps} style={styles.input}/>
)
export default InputField;