import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import { arrowRight } from '../icons';
import { settingOpt as styles } from '../css';
const SettingOptWithoutSwitchBtn = ({title, onPress}) => (
  <TouchableOpacity
          style={styles.settingOptContainer}
          onPress={onPress}>
          <Text
            style={styles.settingOptText}>
            {title}
          </Text>
          <View
            style={styles.settingButton}>
              {arrowRight}
          </View>
  </TouchableOpacity>
)
export default SettingOptWithoutSwitchBtn;