//this is the main screen that will decide whether to display the login screen or sign up screen
import React from 'react';
import Container from './subscreens/Container';
import UpperPart from './subscreens/UpperPart';
import BottomPart from './subscreens/BottomPart';
import { useAuth } from '../../context/AuthProvider';
import { LoginProvider } from '../../context/LoginProvider';
import { SignupProvider } from '../../context/SignupProvider';
import SignupInputBox from './signupsubscreens/SignupInputBox';
import LoginInputBox from './loginsubscreens/LoginInputBox';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
const LoginSignupScreen = () => {
  const {inLoginPage} = useAuth()
  return (
  <Container>
    {/* upper part */}
    <UpperPart/>
    {/* bottom part */}
    <BottomPart/>
    {/* inputbox */}
    {inLoginPage ?
                  <LoginProvider>
                    <LoginInputBox/>
                  </LoginProvider>
                 : 
                 <SignupProvider>
                    <SignupInputBox/>
                 </SignupProvider>}
  </Container>
  );
}
export default LoginSignupScreen;