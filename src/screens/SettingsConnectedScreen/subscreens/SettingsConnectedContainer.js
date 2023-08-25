/**
 * Container component that wraps around all the content of the SettingsConnected screen.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component for the SettingsConnected screen.
 */

import React from 'react';
import { View} from 'react-native';
import { settingConnectedContainer as styles } from '../css';
const SettingsConnectedContainer = ({children}) => (
  <View style={styles.settingConnectedcontainer} >
    {children}
  </View>
)
export default SettingsConnectedContainer;