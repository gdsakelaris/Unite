//this is the main screen that will decide whether to display the login screen or sign up screen
import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
const LoginSignupScreen = ({onLogin}) => {
  const [isLogin, goToLogin] = useState(true)
  return (
    isLogin ?
              <LoginScreen switchScreenHook={goToLogin} onLogin={onLogin}/>
            : 
              <SignUpScreen  switchScreenHook={goToLogin}/>
    
  );
}
export default LoginSignupScreen;