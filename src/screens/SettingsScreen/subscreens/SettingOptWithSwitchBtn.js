/**
 * @file SettingOptWithoutSwitchBtn.js
 * @description This file defines a component with the switch on the Setting screen that represents a setting option. It allows users to perform actions on the setting screens, such as turning on/off notification, darkmode.
 * @param {string} title - Name of the setting option
 * @returns {JSX.Element} A setting option component with the switch.
 */


import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { settingOpt as styles } from '../css';
import Switch from '../../../components/Switch';
const SettingOptWithSwitchBtn = ({title}) => {
  return (
  <View
      style={styles.settingOptContainer}>

      {/* Name of setting option */}
      <Text
        style={styles.settingOptText}>
        {title}
      </Text>

      {/* Switch Button */}
      <Switch/>
  </View>)
}
export default SettingOptWithSwitchBtn;