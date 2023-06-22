//this file will render a title of the picklanguage page
import React from 'react';
import {View} from 'react-native';
import { Text } from 'react-native-paper';
import { titleStyle as styles } from '../css';
const Title = () => {
  return (
    <View 
         style={styles.titleContainer}>
        <Text 
              style={styles.titleText}>
                  Let's pick
        </Text>
        <Text 
              style={styles.titleText}>
                  your language!
        </Text>
    </View>
    );
}
export default Title;