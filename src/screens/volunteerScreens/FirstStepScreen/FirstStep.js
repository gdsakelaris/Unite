import React, { useState } from "react";
import FirstStepScreenContainer from "./subscreens/FirstStepScreenContainer";
import Title from "./subscreens/Title";
import ListOfProvidedServices from "./subscreens/ListOfProvidedServices";
import NextBtn from "../NextBtn";
const FirstStep = () => (
  <FirstStepScreenContainer>
    <Title title={'Select a category for your service'}/>
    <ListOfProvidedServices/>
    <NextBtn/>
  </FirstStepScreenContainer>
);
export default FirstStep;
