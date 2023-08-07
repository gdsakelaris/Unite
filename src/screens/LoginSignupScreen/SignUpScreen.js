// SignUpScreen.js:
import React, { useState } from "react";
import Container from "./subscreens/Container";
import UpperPart from "./subscreens/UpperPart";
import ContinueAsGuestText from "./subscreens/ContinueAsGuestText";
import InputField from "./subscreens/InputField";
import InputBox from "./subscreens/InputBox";
import SignupBtn from './signupsubscreens/SignupBtn'
import OrText from "./subscreens/OrText";
import Slider from "./subscreens/Slider";
import SocialBox from "./subscreens/SocialBox";
import BottomPart from "./subscreens/BottomPart";
import { colors } from "../../base";
import { inputBox as styles } from "./css";
const SignUpScreen = ({switchScreenHook}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Container>
      {/* upper part of the page */}
      <UpperPart/>
      {/* bottom part of the page */}
      <BottomPart/>
      <InputBox style={styles.inputBoxForSignUp}>
          <Slider onSignup={true} switchToLogin={switchScreenHook}/>
          <InputField 
                      placeholder={"Enter Full Name"}
                      placeholderTextColor= {colors.darkgrey}
                      value={name}
                      onChangeText={setName}
                      autoCapitalize="none"
                      clearButtonMode='always'/>
          <InputField 
                      placeholder={"Enter Email"}
                      placeholderTextColor= {colors.darkgrey}
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      clearButtonMode='always'/>
          <InputField
                      placeholder="Password"
                      placeholderTextColor= {colors.darkgrey}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      clearButtonMode='always'/>
          <InputField  
                      placeholder="Confirm Password"
                      placeholderTextColor= {colors.darkgrey}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry
                      clearButtonMode='always'/>
          <SignupBtn email={email} password={password} confirmPassword={confirmPassword}/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
        </InputBox>
    </Container>
  );
};
export default SignUpScreen;
