/**
 * NextBtn component.
 * Renders a "Next" button for the describe service screen to navigate to another screen.
 *
 * @component
 * @param {object} navigation - Navigation prop from React Navigation.
 * @param {string} navigateTo - Screen name to navigate to.
 * @returns {JSX.Element} NextBtn component
 */

import React from 'react';
import { Text } from 'react-native-paper';
import { nextBtn as styles } from '../css';
import {Pressable} from "react-native";

const NextBtn = ({navigation, navigateTo}) => (
  <Pressable 
            style={styles.nextBtnContainer} 
            onPress={
                () => navigation.navigate(navigateTo)
            }>
            {/* Text of the button */}
          <Text style={styles.nextBtnLabel}>
                Next
          </Text>
  </Pressable>
)
export default NextBtn;