/**
 * @file ProfileOption.js
 * @description This file defines a profile option card component, allowing users to perform various actions on the profile screen, such as navigating to bookmarked services, settings, or logging out.
 * @param {string} optionName name of the option
 * @param {string} iconName name of the option's icon
 * @param {Function} onPress the function for the option when it is pressed
 * @returns {JSX.Element} A profile option card component.
 */

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import getOptionIcon from './getOptionIcon';
import {Text} from 'react-native-paper';
import {keyboardArrowRightIcon} from '../icons';
import {profileOption as styles} from '../css';

const ProfileOption = ({optionName, navigateTo, iconName, navigation, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rowContainer}>
      {getOptionIcon(iconName)}
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{optionName}</Text>
      </View>
      {keyboardArrowRightIcon}
    </TouchableOpacity>
  );
}
export default ProfileOption;