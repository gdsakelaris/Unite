import React from "react";
import ContinueAsGuestText from "../subscreens/ContinueAsGuestText";
import ForgotPasswordText from "./ForgotPasswordText";
import InputField from "../subscreens/InputField";
import InputBox from "../subscreens/InputBox";
import LoginBtn from "./LoginBtn";
import OrText from "../subscreens/OrText";
import Slider from "../subscreens/Slider";
import SocialBox from "../subscreens/SocialBox";
import { colors } from "../../../base";
import { useLoginContext } from "../../../context/LoginProvider";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
const LoginInputBox = () => {
  const {email, setEmail, password, setPassword, passwordInvisible, showPassword} = useLoginContext()
  const placeHolderText = "Enter Email/Phone Number/Username";
  return (
    <KeyboardAvoidingWrapper keyboardVerticalOffset={-200}>
      <InputBox>
          <Slider onLogin={true}/>
          <InputField 
                       placeholder={placeHolderText}
                       placeholderTextColor= {colors.darkgrey}
                       value={email}
                       onChangeText={setEmail}
                       keyboardType="email-address"
                       autoCapitalize="none"
                       clearButtonMode='always'/>
          <InputField  placeholder="Password"
                       placeholderTextColor= {colors.darkgrey}
                       value={password}
                       onChangeText={setPassword}
                       secureTextEntry={passwordInvisible}
                       clearButtonMode='always'
                       passwordInvisible={passwordInvisible}
                       showPassword={showPassword}/>
          <ForgotPasswordText/>
          <LoginBtn/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
      </InputBox> 
    </KeyboardAvoidingWrapper>
  );
};
export default LoginInputBox;
