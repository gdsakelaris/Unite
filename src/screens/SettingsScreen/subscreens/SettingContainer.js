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