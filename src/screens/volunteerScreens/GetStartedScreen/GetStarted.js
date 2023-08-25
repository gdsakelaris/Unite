/**
 * This component render a get started page that user will see when they start creating resource
 * @param {Object} navigation navigation object that allows user to move to different pages 
 */

import React from 'react';
import GetStartedBtn from './subscreens/GetStartedBtn';
import GetStartedContainer from './subscreens/GetStartedContainer';
import InstructionCard from './subscreens/InstructionCard';
import {stepsOfInstruction} from './StepOfInstructions';
import {screenTitle as styles} from './css';
import ScreenTitle from '../../../components/ScreenTitle';

const GetStarted = ({navigation}) => (
  <GetStartedContainer>
    {/* Title  */}
    <ScreenTitle titleMessage={"Let's get started"} style={styles.title}/>

    {/* Map through the array of instructions and render InstructionCard for each */}
    {stepsOfInstruction.map((instruction, i) =>
      <InstructionCard instruction={instruction.instruction}
                       source={instruction.image} title={instruction.title} key={i.toString()}/>)}
    
    {/* Get Started Button. Move user to the next step */}
    <GetStartedBtn navigation={navigation}/>
  </GetStartedContainer>

)
export default GetStarted;