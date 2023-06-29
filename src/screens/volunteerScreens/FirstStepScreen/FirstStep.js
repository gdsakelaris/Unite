import React, { useState } from "react";
import FirstStepScreenContainer from "./subscreens/FirstStepScreenContainer";
import Title from "./subscreens/Title";
import ListOfProvidedServices from "./subscreens/ListOfProvidedServices";
import NextBtn from "./subscreens/NextBtn";
const FirstStep = ({navigation}) => (
  <FirstStepScreenContainer>
    <Title title={'Select a category for your service'}/>
    <ListOfProvidedServices/>
    <NextBtn navigation={navigation}/>
  </FirstStepScreenContainer>
);
export default FirstStep;
