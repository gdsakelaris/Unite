// SignUpScreen.js:
import React, { useRef } from "react";
import ContinueAsGuestText from "../subscreens/ContinueAsGuestText";
import InputField from "../subscreens/InputField";
import InputBox from "../subscreens/InputBox";
import SignupBtn from './SignupBtn'
import OrText from "../subscreens/OrText";
import Slider from "../subscreens/Slider";
import SocialBox from "../subscreens/SocialBox";
import { colors } from "../../../base";
import { inputBox as styles } from "../css";
import { useSignupContext } from "../../../context/SignupProvider";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import { KeyboardAvoidingView } from "react-native";
const SignupInputBox = () => {
  const {name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword} = useSignupContext()
  return (
      <InputBox style={styles.inputBoxForSignUp}>
          <Slider/>
          <InputField 
                      placeholder={"Enter Full Name"}
                      placeholderTextColor= {colors.darkgrey}
                      value={name}
                      onChangeText={setName}
                      autoCapitalize="none"
                      clearButtonMode='always'         
                      />
          <InputField 
                      placeholder={"Enter Email"}
                      placeholderTextColor= {colors.darkgrey}
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      clearButtonMode='always'
                      />
          <InputField
                      placeholder="Password"
                      placeholderTextColor= {colors.darkgrey}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      clearButtonMode='always'
                      />
          <InputField  
                      placeholder="Confirm Password"
                      placeholderTextColor= {colors.darkgrey}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry
                      clearButtonMode='always'
                      />
          <SignupBtn/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
        </InputBox>
  );
};
export default SignupInputBox;
