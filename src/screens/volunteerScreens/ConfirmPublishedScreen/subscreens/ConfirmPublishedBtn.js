/**
 * @file ConfirmPublishedBtn.js
 * @description This file make a button component for the Published screen.
 * @param {string} text - name of the button
 * @param {Function} onPress - function for the button when it's pressed
 * @returns {JSX.Element} A button component for the Published screen.
 */

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