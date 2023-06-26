// SignUpScreen.js:
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BackgroundColor from "../LoginScreen/subscreens/BackgroundColor";
import ContinueAsGuestText from '../LoginScreen/subscreens/ContinueAsGuestText'
import InputField from '../LoginScreen/subscreens/InputField'
import LoginBox from '../LoginScreen/subscreens/LoginBox'
import LoginContainer from '../LoginScreen/subscreens/LoginContainer'
import Logo from '../LoginScreen/subscreens/Logo'
import OrText from '../LoginScreen/subscreens/OrText'
import Slider from '../LoginScreen/subscreens/Slider'
import SocialBox from '../LoginScreen/subscreens/SocialBox'
import SignupBtn from "./subscreens/SignupBtn";
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const placeHolderText = "Enter Email/Phone Number/Username";

  return (
    <BackgroundColor>
      <LoginContainer>
        <Logo/>
        <LoginBox>
          <Slider navigation={navigation}/>
          <InputField 
                      placeholder={placeHolderText}
                      placeholderTextColor="#F78154"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"/>
          <InputField
                      placeholder="Password"
                      placeholderTextColor="#F78154"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry/>
          <InputField  
                      placeholder="Confirm Password"
                      placeholderTextColor="#F78154"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry/>
          <SignupBtn email={email} password={password} confirmPassword={confirmPassword}/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
        </LoginBox>
      </LoginContainer>
    </BackgroundColor>
  );
};
export default SignUpScreen;
