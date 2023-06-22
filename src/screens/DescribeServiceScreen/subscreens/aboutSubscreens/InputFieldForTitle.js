import React from 'react';
import { View, TextInput} from 'react-native';
import { Text } from 'react-native-paper';
import { about as styles } from '../../css';
const InputFieldForTitle = () => {
  return (
    <View style={styles.inputFieldForTitleContainer}>
          <Text style={styles.label}>
              Title:
          </Text>
          <TextInput style={styles.titleTextInput} clearButtonMode='always'/>
    </View>
  );
}


export default InputFieldForTitle;