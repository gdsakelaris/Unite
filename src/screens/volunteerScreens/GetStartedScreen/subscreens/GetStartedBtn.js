/**
 * Render the Get Started Button that navigate user to First Step screen
 * @param {Object} navigation navigation object that allows user to move to "First Step" sreen 
 */
import React from 'react';
import { btnSettings } from '../../ThirdStepScreen/submitBtnProp';
import { Button, Text } from 'react-native-paper'; //Ultilized Button component from react native paper because it provides a prop that change color of button to darkmode. Check out Button component in react native paper for references
import {Pressable} from "react-native";
const GetStartedBtn = ({navigation}) => (
  <Button {...btnSettings} onPress={() => navigation.navigate('First Step')}>
    Get Started
  </Button>
)
export default GetStartedBtn;