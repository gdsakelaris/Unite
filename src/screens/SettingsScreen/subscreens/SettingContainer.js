/**
 * @file SettingContainer.js
 * @description This file defines a container component that wraps around all the content of the Setting screen.
 * @param {Object} children - The components to be wrapped inside the container.
 * @returns {JSX.Element} A container component for the Setting screen content.
 */

import React from 'react';
import { View } from 'react-native';
import { settingContainer as styles } from '../css';
const SettingContainer = ({children}) => (
  <View style={styles.container}>
      <View style={styles.settingContainer}>
        {children}
      </View>
  </View>
)

export default SettingContainer;