/**
 * @file SubmitBtn.js
 * @description This file render the submit button for write review screen.
 * @param {Function} onPress - Funciton when submit button on write review screen is pressed
 * @returns {JSX.Element} The SectionTitle component.
 */

import React from 'react';
import { Button} from 'react-native-paper'; //Ultilized Button component in react native paper because it provides a prop that can change the button color to dark mode
import { submitBtn as styles } from '../css';
const SubmitBtn = ({onPress}) => {
  return (
    <Button mode='elevated' style={styles.submitButton} labelStyle={styles.submitText} contentStyle={styles.contentBtn} onPress={onPress}>
      Submit Review
    </Button>
  );
}
export default SubmitBtn;