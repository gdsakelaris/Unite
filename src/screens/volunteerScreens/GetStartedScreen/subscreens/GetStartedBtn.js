import React from 'react';
import { submitBtn as styles } from '../../ThirdStepScreen/css';
import { btnSettings } from '../../ThirdStepScreen/submitBtnProp';
import { Button, Text } from 'react-native-paper';
const GetStartedBtn = () => (
  <Button {...btnSettings}>
    <Text style={styles.publishBtnText}>Get Started</Text>
  </Button>
)
export default GetStartedBtn;