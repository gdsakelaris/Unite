/**
 * @file PickLanguageBtn.js
 * @description This file contains a component for a button that navigates to the login/sign up screen on the pick language screen.
 */

import React from 'react';
import {Text} from 'react-native-paper';
import { pickLanguageBtnStyle as styles} from '../css';
import {View, Pressable} from 'react-native';

/**
 * Component for a button that navigates to the login/sign up screen on the pick language screen.
 *
 * @component
 * @param {object} navigation - Navigation object for navigating to other screens.
 * @returns {JSX.Element} - A JSX element representing the PickLanguageBtn component.
 */
const PickLanguageBtn = ({navigation}) => (
  <View style={styles.buttonContainer}>
    <Pressable mode='elevated' style={styles.button}  onPress={() => navigation.navigate('LoginSignup')}>
        <Text style={styles.buttonLabel}>
          Next
        </Text>
    </Pressable>
  </View>
 
)

export default PickLanguageBtn;