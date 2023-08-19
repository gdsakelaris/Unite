/**
 * @file SignupBtn.js
 * @description This file contains a component for the signup button displayed on the signup inputbox.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import signUpNewAccount from '../../../utils/api/signUpNewAccount';
import { useSignupContext } from '../../../context/SignupProvider';
import { useAuth } from '../../../context/AuthProvider';

const SignupBtn = () => {
  //get the signup-related state variables from SignupProvider context
  const {name, email, password, confirmPassword} = useSignupContext()

  //get the authetication functions from AuthProvider context to toggle between login page and signup page
  //If the new user is registered successfully, direct user to login page
  const {switchPage, setIsLoading} = useAuth()

  /**
   * Handles the signup process when the signup button is pressed.
   * @function onPressSignup
   */
  const onPressSignup = () => {
    /**
     * include everything below in try catch
     * check if confirm password match with password
     * setIsLoading(true) - start loading state
     * signupNewAccount(name, email, password)
     * switchPage() - direct to login page after signing up successfully
     * setIsLoading(false) - end loading state
     * 
     */
    signUpNewAccount(name, email, password)
    switchPage()
  }
  return (
    <TouchableOpacity style={styles.button} onPress={onPressSignup}>
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity>
  )
}
export default SignupBtn;