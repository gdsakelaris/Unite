import React from 'react';
import GetStartedBtn from './subscreens/GetStartedBtn';
import GetStartedContainer from './subscreens/GetStartedContainer';
import InstructionCard from './subscreens/InstructionCard';
import { stepsOfInstruction } from './StepOfInstructions';
import Title from './subscreens/Title';
const GetStarted = () => (
  <GetStartedContainer>
      <Title/>
      {stepsOfInstruction.map((instruction, i) => 
                                    <InstructionCard instruction={instruction.instruction}
                                    source={instruction.image} title={instruction.title} key={i.toString()}/>)}
      <GetStartedBtn/>
  </GetStartedContainer>
  
)
export default GetStarted;