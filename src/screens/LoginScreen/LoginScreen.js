import React, { useState } from "react";
import BackgroundColor from "./subscreens/BackgroundColor";
import ContinueAsGuestText from "./subscreens/ContinueAsGuestText";
import ForgotPasswordText from "./subscreens/ForgotPasswordText";
import InputField from "./subscreens/InputField";
import LoginBox from "./subscreens/LoginBox";
import LoginBtn from "./subscreens/LoginBtn";
import LoginContainer from "./subscreens/LoginContainer";
import OrText from "./subscreens/OrText";
import Slider from "./subscreens/Slider";
import SocialBox from "./subscreens/SocialBox";
import { useNavigation } from "@react-navigation/native";
import Logo from "./subscreens/Logo";
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <InputField  placeholder="Password"
                       placeholderTextColor="#F78154"
                       value={password}
                       onChangeText={setPassword}
                       secureTextEntry/>
          <ForgotPasswordText/>
          <LoginBtn onLogin={onLogin} email={email} password={password}/>
          <OrText/>
          <SocialBox/>
          <ContinueAsGuestText/>
        </LoginBox>
      </LoginContainer>

    </BackgroundColor>
    
  );
};
export default LoginScreen;
