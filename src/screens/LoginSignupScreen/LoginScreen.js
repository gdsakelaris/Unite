import React, { useState } from "react";
import BackgroundColor from "./subscreens/BackgroundColor"
import ContinueAsGuestText from "./subscreens/ContinueAsGuestText";
import ForgotPasswordText from "./loginsubscreens/ForgotPasswordText";
import InputField from "./subscreens/InputField";
import InputBox from "./subscreens/InputBox";
import LoginBtn from "./loginsubscreens/LoginBtn";
import Container from "./subscreens/Container";
import OrText from "./subscreens/OrText";
import Slider from "./subscreens/Slider";
import SocialBox from "./subscreens/SocialBox";
import Logo from "./subscreens/Logo";
import BottomPart from "./subscreens/BottomPart";
const LoginScreen = ({ onLogin, switchScreenHook }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const placeHolderText = "Enter Email/Phone Number/Username";
  return (
    <BackgroundColor>
      <Container>
        <Logo/>
      </Container>
      <BottomPart/>
      <InputBox>
          <Slider onLogin={true} switchToLogin={switchScreenHook} />
          <InputField 
                       placeholder={placeHolderText}
                       placeholderTextColor="#F78154"
                       value={email}
                       onChangeText={setEmail}
                       keyboardType="email-address"
                       autoCapitalize="none"
                       clearButtonMode='always'/>
          <InputField  placeholder="Password"
                       placeholderTextColor="#F78154"
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

    </BackgroundColor>
    
  );
};
export default LoginScreen;
