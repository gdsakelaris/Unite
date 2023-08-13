//this file will make input field component for the login and sign up screen. User can type their info into this text input and their info will be stored and sent to the database
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { inputField as styles } from '../css';
import { inputBox } from '../css';
import { eye, eye_off } from '../icons';
import { useAuth } from '../../../context/AuthProvider';
const InputField = ({showPassword, passwordInvisible, ...textInputProps}) => {
  const {inLoginPage} = useAuth()
  return (
    <View>
      <TextInput {...textInputProps} style={styles.input}/>
      {typeof passwordInvisible === 'boolean'  && inLoginPage ?
                                  <TouchableOpacity style={inputBox.showPasswordEyeIcon} onPress={showPassword}>
                                        {passwordInvisible ? eye_off : eye}
                                  </TouchableOpacity>
                                  : null}
    </View>
  )
}
export default InputField;