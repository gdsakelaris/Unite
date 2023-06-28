import React, {useState} from 'react';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native';
import SectionContainer from './SectionContainer';
import { reviewTextInput as styles } from '../css';
import SectionTitle from './SectionTitle';
const ReviewTextBox = () => {
  const [value, onChangeText] = useState("");
  const [remainingChars, setRemainingChars] = useState(1000);
  const handleTextChange = (text) => {
    onChangeText(text);
    setRemainingChars(1000 - text.length); // Update the character count based on your maximum character limit
  };
  return (
    <SectionContainer>
      <SectionTitle title={'Write your Review'}/>
       <TextInput
          editable
          multiline
          onChangeText={handleTextChange} // Update the onChangeText callback
          placeholder="Enter your review"
          value={value}
          style={styles.Txtinput}
          maxLength={1000}
        />

        <Text style={styles.remainingChars}>
          {remainingChars}/1000 characters
        </Text>
      
    </SectionContainer>
  );
}
export default ReviewTextBox;