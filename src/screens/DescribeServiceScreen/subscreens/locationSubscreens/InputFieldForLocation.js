import React from 'react';
import {View, TextInput} from 'react-native';
import { location as styles } from '../../css';
import { locationIcon } from '../../icons';
const InputFieldForLocation = ({...inputFieldProps}) => {
  return (
    <View style={styles.inputFieldForLocation}>
      {locationIcon}
      <TextInput style={styles.locationTextInput} clearButtonMode='always' {...inputFieldProps}/>
    </View>
  );
}
export default InputFieldForLocation;