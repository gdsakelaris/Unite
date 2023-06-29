import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
const LoginSignupScreen = () => {
  const [onLogin, goToLogin] = useState(true)
  return (
    onLogin ?
              <LoginScreen switchScreenHook={goToLogin}/>
            : 
              <SignUpScreen  switchScreenHook={goToLogin}/>
    
  );
}
export default LoginSignupScreen;