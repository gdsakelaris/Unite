import React from 'react';
import { View, TextInput } from 'react-native';
import { media as styles } from '../../css';
import { getVectorIconBasedOnParam } from './functions';
const InputFieldForMedia = ({mediaicon, ...inputFieldProps}) => {
  return (
    <View style={styles.inputFieldForMedia}>
      {getVectorIconBasedOnParam(mediaicon)}
      <TextInput style={styles.mediaTextInput} clearButtonMode='always' {...inputFieldProps}/>
    </View>
  );
}
export default InputFieldForMedia;