/**
 * @file InputFieldForTitle.js
 * @description This file renders a text input field for inputting the resource's title 
 */

import React from 'react';
import { View, TextInput} from 'react-native';
import { Text } from 'react-native-paper';
import { about as styles } from '../../css';
import { useResourceContext } from '../../../../context/ResourceProvider';
import updateResource from '../../../../utils/updateResource';
const InputFieldForTitle = () => {
  //get resource-related state variables and a function to change the value of the state
  const {resource, dispatch} = useResourceContext()
  return (
    <View style={styles.inputFieldForTitleContainer}>
          {/* title  */}
          <Text style={styles.label}>
              Title:
          </Text>
          {/* text input */}
          <TextInput 
                    style={styles.titleTextInput} 
                    clearButtonMode='always' //show the clear button on text input
                    value={resource.name} // the displayed text on the text input
                    onChangeText={(newText) => {
                                                    updateResource(dispatch, {field: 'name', value: newText})
                                               }}/>
    </View>
  );
}


export default InputFieldForTitle;