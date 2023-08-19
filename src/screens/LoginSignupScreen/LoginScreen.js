import React, { useState } from "react";
import ContinueAsGuestText from "./subscreens/ContinueAsGuestText";
import ForgotPasswordText from "./loginsubscreens/ForgotPasswordText";
import InputField from "./subscreens/InputField";
import InputBox from "./subscreens/InputBox";
import LoginBtn from "./loginsubscreens/LoginBtn";
import Container from "./subscreens/Container";
import UpperPart from "./subscreens/UpperPart";
import OrText from "./subscreens/OrText";
import Slider from "./subscreens/Slider";
import SocialBox from "./subscreens/SocialBox";
import { colors } from "../../base";
import BottomPart from "./subscreens/BottomPart";
const LoginScreen = ({ onLogin, switchScreenHook }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const placeHolderText = "Email/Phone/Username";
  return (
    <Container>
      {/* upper part */}
      <UpperPart/>
      {/* bottom part */}
      <BottomPart/>
      <InputBox>
          <Slider onLogin={true} switchToLogin={switchScreenHook} />
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
                       secureTextEntry
                       clearButtonMode='always'/>
          <ForgotPasswordText/>
          <LoginBtn onLogin={onLogin} email={email} password={password}/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
        </InputBox>

    </Container>
    
  );
};
export default LoginScreen;
