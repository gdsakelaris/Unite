//First Step screen. This is the screen that the user will see when they run the application
import React from "react";
import FirstStepScreenContainer from "./subscreens/FirstStepScreenContainer";
import ListOfProvidedServices from "./subscreens/ListOfProvidedServices";
//use the next btn component created for the Describe Service screen
import NextBtn from "../../DescribeServiceScreen/subscreens/NextBtn";
import ScreenTitle from "../../../components/ScreenTitle";
import { title as styles } from "./css";
const FirstStep = ({navigation}) => (
  <FirstStepScreenContainer>
    <ScreenTitle titleMessage={'Select a category for your service'} style={styles.title}/>
    <ListOfProvidedServices/>
    <NextBtn navigation={navigation} navigateTo={'Describe Service'}/>
  </FirstStepScreenContainer>
);
export default FirstStep;
