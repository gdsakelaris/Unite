import React from 'react';
import { TextInput } from 'react-native';
import { about as styles } from '../../css';
const InputFieldForDescription = () => {
  return (
    <TextInput style={styles.descriptionTextInput} multiline={true} clearButtonMode='always'/>
  );
}
export default InputFieldForDescription;