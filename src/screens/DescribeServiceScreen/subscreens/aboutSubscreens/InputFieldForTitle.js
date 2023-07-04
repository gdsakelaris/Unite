// This file will create a text input box with the text 'Title' rendered next to the text input field for entering the resource's title.  
import React from 'react';
import { View, TextInput} from 'react-native';
import { Text } from 'react-native-paper';
import { about as styles } from '../../css';
const InputFieldForTitle = () => {
  return (
    <View style={styles.inputFieldForTitleContainer}>
          {/* title  */}
          <Text style={styles.label}>
              Title:
          </Text>
          {/* text input */}
          <TextInput style={styles.titleTextInput} clearButtonMode='always'/>
    </View>
  );
}


export default InputFieldForTitle;