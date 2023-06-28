import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import img from '../../../images/Allura.png'
import ConfirmPublishedScreenContainer from "./subscreens/ConfirmPublishedScreenContainer";
import ConfirmPublishedBtn from "./subscreens/ConfirmPublishedBtn";
import ButtonContainer from "./subscreens/ButtonContainer";
import { infos as styles } from "./css";
const Published = () => {
  return (
    <ConfirmPublishedScreenContainer>
          <Text style = {styles.title}>Published!</Text>
          <Text style = {styles.congratsText}>Congratulations! You have Published your first service!</Text>
          <Image source={img} style = {styles.image}/>
          <Text style = {styles.next}>What's Next?</Text>
          <ButtonContainer>
            <ConfirmPublishedBtn text={'View other services'}/>
            <ConfirmPublishedBtn text={'View published services'}/>
          </ButtonContainer>
    </ConfirmPublishedScreenContainer>
  );
};
export default Published;
