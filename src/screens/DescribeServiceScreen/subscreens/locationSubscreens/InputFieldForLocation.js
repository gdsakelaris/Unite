//this file will create a text input component for entering the resoruce's location
import React from 'react';
import {View, TextInput} from 'react-native';
import { location as styles } from '../../css';
import { locationIcon } from '../../icons';
import { useResourceContext } from '../../../../context/ResourceProvider';
import { resourceActions } from '../../../../context/resourceTemplate';
const InputFieldForLocation = ({...inputFieldProps}) => {
  const {resource, dispatch} = useResourceContext()
  return (
    <View style={styles.inputFieldForLocation}>
      {locationIcon}
      <TextInput style={styles.locationTextInput} clearButtonMode='always' {...inputFieldProps} value={resource.address} onChangeText={(newText) => {
      dispatch(resourceActions.create({address: newText}))
      console.log(resource)
    }}/>
    </View>
  );
}
export default InputFieldForLocation;