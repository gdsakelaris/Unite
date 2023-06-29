import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import Switch from '../../../components/Switch'
import { settingConnectedOpt as styles } from '../css';
const SettingConnectedOpt = ({connectedOptName}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.text}>{connectedOptName}</Text>
    <Switch/>
  </View>
)
export default SettingConnectedOpt;