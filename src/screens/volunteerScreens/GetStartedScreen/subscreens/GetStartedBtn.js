//this file will make a get started btn that the user can use to navigate to another screen 
import React from 'react';
import { btnSettings } from '../../ThirdStepScreen/submitBtnProp';
import { Button } from 'react-native-paper';
const GetStartedBtn = ({navigation}) => (
  <Button {...btnSettings} onPress={() => navigation.navigate('First Step')}>
    Get Started
  </Button>
)
export default GetStartedBtn;