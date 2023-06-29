import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
const LoginSignupScreen = () => {
  const [isLogin, goToLogin] = useState(true)
  return (
    isLogin ?
              <LoginScreen switchScreenHook={goToLogin}/>
            : 
              <SignUpScreen  switchScreenHook={goToLogin}/>
    
  );
}
export default LoginSignupScreen;