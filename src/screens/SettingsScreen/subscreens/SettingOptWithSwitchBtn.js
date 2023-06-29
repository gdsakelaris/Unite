import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { settingOpt as styles } from '../css';
import Switch from '../../../components/Switch';
const SettingOptWithSwitchBtn = ({title}) => {
  return (
  <View
      style={styles.settingOptContainer}>
      <Text
        style={styles.settingOptText}>
        {title}
      </Text>
      <Switch/>
  </View>)
}
export default SettingOptWithSwitchBtn;