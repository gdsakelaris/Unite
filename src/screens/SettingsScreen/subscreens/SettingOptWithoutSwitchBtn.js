/**
 * @file SettingOptWithoutSwitchBtn.js
 * @description This file defines a component without the switch on the Setting screen that represents a setting option. It allows users to perform actions on the setting screens, such as navigating to the SettingConnected screen or SettingLanguage screen.
 * @param {string} title - Name of the setting option
 * @param {Function} onPress - A function when the setting option is pressed
 * @returns {JSX.Element} A setting option component without the switch.
 */

import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import { arrowRight } from '../icons';
import { settingOpt as styles } from '../css';
const SettingOptWithoutSwitchBtn = ({title, onPress}) => (
  <TouchableOpacity
          style={styles.settingOptContainer}
          onPress={onPress}>
          
          {/* Name of the setting option */}
          <Text
            style={styles.settingOptText}>
            {title}
          </Text>

          {/* Arrow Right icon */}
          <View
            style={styles.settingButton}>
              {arrowRight}
          </View>
          
  </TouchableOpacity>
)
export default SettingOptWithoutSwitchBtn;