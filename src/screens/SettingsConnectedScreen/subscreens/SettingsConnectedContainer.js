import React from 'react';
import { View} from 'react-native';
import { settingConnectedContainer as styles } from '../css';
const SettingsConnectedContainer = ({children}) => (
  <View style={styles.settingConnectedcontainer} >
    {children}
  </View>
)
export default SettingsConnectedContainer;