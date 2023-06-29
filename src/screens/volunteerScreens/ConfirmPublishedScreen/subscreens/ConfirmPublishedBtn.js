import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { button as styles } from '../css';
const ConfirmPublishedBtn = ({onPress, text}) => (
  <TouchableOpacity style ={styles.buttons} onPress={onPress}>
        <Text style = {styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)
export default ConfirmPublishedBtn;