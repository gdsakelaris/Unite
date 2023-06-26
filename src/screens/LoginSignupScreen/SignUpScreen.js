// SignUpScreen.js:
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const placeHolderText = "Enter Email/Phone Number/Username";

  return (
    <BackgroundColor>
      <Container>
        <Logo/>
        <InputBox>
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
        </InputBox>
      </Container>
    </BackgroundColor>
  );
};
export default SignUpScreen;
