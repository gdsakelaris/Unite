/**
 * @file ReviewTextBox.js
 * @description This file defines the text input where user can write their review on. Maximum 1000 characters
 * @returns {JSX.Element} The ReviewTextBox component.
 */


import React, {useState} from 'react';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native';
import SectionContainer from './SectionContainer';
import { reviewTextInput as styles } from '../css';
import SectionTitle from './SectionTitle';
import calculateRemainingChars from '../../../utils/calculateRemainingChars';
const ReviewTextBox = () => {
  const [value, onChangeText] = useState("");  //the value that the user typed into the write review textbox
  const [remainingChars, setRemainingChars] = useState(1000); //the maximum character that the user is allowd to type into the write review textbox

  //count and update the number of characters that user typed into the text input
  const handleTextChange = (text) => {
    onChangeText(text);
    setRemainingChars(calculateRemainingChars(1000, text.length)); // Update the character count based on your maximum character limit
  };


  return (
    <SectionContainer>
      {/* Section title */}
      <SectionTitle title={'Write your Review'}/>

       {/* TextInput for writing review */}
       <TextInput
          editable
          multiline
          onChangeText={handleTextChange} // Update the onChangeText callback
          placeholder="Enter your review"
          value={value}
          style={styles.Txtinput}
          maxLength={1000}
        />

        {/* Display number of characters typed into the text input */}
        <Text style={styles.remainingChars}>
          {remainingChars}/1000 characters
        </Text>
      
    </SectionContainer>
  );
}
export default ReviewTextBox;