//this file will make text input component for entering the description of the resource
import React from 'react';
import { TextInput } from 'react-native';
import { about as styles } from '../../css';
import { useResourceContext } from '../../../../context/ResourceProvider';
import { resourceActions } from '../../../../context/resourceTemplate';
const InputFieldForDescription = () => {
  const {resource, dispatch} = useResourceContext()
  return (
    <TextInput style={styles.descriptionTextInput} multiline clearButtonMode='always' maxLength={1000} value={resource.description} onChangeText={(newText) => {
      dispatch(resourceActions.create({description: newText}))
      console.log(resource)
    }} />
  );
}
export default InputFieldForDescription;