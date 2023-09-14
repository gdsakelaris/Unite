/**
 * @file Title.js
 * @description This file contains a component that displays the title of the Pick Language screen.
 */


import React from 'react';
import {View} from 'react-native';
import { Text } from 'react-native-paper';
import { titleStyle as styles } from '../css';

/**
 * Component to display the title of the Pick Language screen.
 *
 * @component
 * @returns {JSX.Element} - A JSX element representing the title of the Pick Language screen.
 */
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