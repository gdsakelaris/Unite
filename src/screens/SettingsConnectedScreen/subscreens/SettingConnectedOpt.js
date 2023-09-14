/**
 * Represents a setting option with a switch to enable or disable the option.
 * This component is likely to be used within the SettingsConnected screen.
 * @param {string} connectedOptName - The name of the connected option (e.g., 'Google', 'Facebook').
 * @returns {JSX.Element} A component representing a connected setting option.
 */

import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import Switch from '../../../components/Switch'
import { settingConnectedOpt as styles } from '../css';
const SettingConnectedOpt = ({connectedOptName}) => (
  <View style={styles.rowContainer}>
    {/* name of the setting option */}
    <Text style={styles.text}>{connectedOptName}</Text>
    {/* switch ON/OFF */}
    <Switch/>
  </View>
)
export default SettingConnectedOpt;