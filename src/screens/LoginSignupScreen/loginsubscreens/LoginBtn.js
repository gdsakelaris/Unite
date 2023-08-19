/**
 * @file LoginBtn.js
 * @description This file contains a component for the login button displayed on the login input box.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { loginBtn as styles } from '../css';
import { useAuth } from '../../../context/AuthProvider';
import { useLoginContext } from '../../../context/LoginProvider';
import handleLogin from '../../../utils/api/handleLogin';

/**
 * @component LoginBtn
 * @description Represents the login button component for the login screen.
 */
const LoginBtn = () => {
  //get the authetication functions from AuthProvider context to direct user to homepage after their credential is verified
  const {loggingIn, setIsLoading, saveUserAuth} = useAuth()
  
  //get the login-related state variables from LoginProvider context
  const {email,password} = useLoginContext()

  /**
   * Handles the login process when the login button is pressed.
   * @function onPressLogin
   */
  const onPressLogin = () => {
    /**
     * setIsLoading(true) - display loading state
     * handleLogin(email, password) - if no error, should return  {userToken: “... “, userInfo: “ ...“}
     * saveUserAuth(userToken, userInfo) - save user's token and info to async storage
     * loggingIn() - direct user to homepage
     * setIsLoading(false) - end loading state
     * 
     */
    setIsLoading(true)
    handleLogin(email, password);
    saveUserAuth('fake token', {'email': email, 'password': password})
    loggingIn()
    setIsLoading(false)
  };

  return (
    <TouchableOpacity 
                      style={styles.button} 
                      onPress={
                                onPressLogin
                              }>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
  )
}
export default LoginBtn;