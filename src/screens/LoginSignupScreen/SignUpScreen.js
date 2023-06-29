// SignUpScreen.js:
import React, { useState } from "react";
import BackgroundColor from "./subscreens/BackgroundColor"
import ContinueAsGuestText from "./subscreens/ContinueAsGuestText";
import InputField from "./subscreens/InputField";
import InputBox from "./subscreens/InputBox";
import SignupBtn from './signupsubscreens/SignupBtn'
import Container from "./subscreens/Container";
import OrText from "./subscreens/OrText";
import Slider from "./subscreens/Slider";
import SocialBox from "./subscreens/SocialBox";
import Logo from "./subscreens/Logo";
import BottomPart from "./subscreens/BottomPart";
const SignUpScreen = ({switchScreenHook}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const placeHolderText = "Enter Email/Phone Number/Username";

  return (
    <BackgroundColor>
      <Container>
        <Logo/>
      </Container>
      <BottomPart/>
      <InputBox>
          <Slider onSignup={true} switchToLogin={switchScreenHook}/>
          <InputField 
                      placeholder={placeHolderText}
                      placeholderTextColor="#F78154"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      clearButtonMode='always'/>
          <InputField
                      placeholder="Password"
                      placeholderTextColor="#F78154"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      clearButtonMode='always'/>
          <InputField  
                      placeholder="Confirm Password"
                      placeholderTextColor="#F78154"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry
                      clearButtonMode='always'/>
          <SignupBtn email={email} password={password} confirmPassword={confirmPassword}/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
        </InputBox>
    </BackgroundColor>
  );
};
export default SignUpScreen;
