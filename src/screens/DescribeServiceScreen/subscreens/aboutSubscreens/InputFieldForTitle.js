// This file will create a text input box with the text 'Title' rendered next to the text input field for entering the resource's title.  
import React from 'react';
import { View, TextInput} from 'react-native';
import { Text } from 'react-native-paper';
import { about as styles } from '../../css';
import { useResourceContext } from '../../../../context/ResourceProvider';
import { resourceActions } from '../../../../context/resourceTemplate';
const InputFieldForTitle = () => {
  const {resource, dispatch} = useResourceContext()
  return (
    <View style={styles.inputFieldForTitleContainer}>
          {/* title  */}
          <Text style={styles.label}>
              Title:
          </Text>
          {/* text input */}
          <TextInput style={styles.titleTextInput} clearButtonMode='always' value={resource.name} onChangeText={(newText) => {
            dispatch(resourceActions.create({name: newText}))
            console.log(resource)
          }}/>
    </View>
  );
}


export default InputFieldForTitle;