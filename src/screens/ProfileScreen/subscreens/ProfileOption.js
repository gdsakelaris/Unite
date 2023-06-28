import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getOptionIcon } from '../funtions';
import { Text} from 'react-native-paper';
import { keyboardArrowRightIcon } from '../icons';
import { profileOption as styles } from '../css';
const ProfileOption = ({optionName, navigateTo, iconName, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} style={styles.rowContainer}>
      {getOptionIcon(iconName)}
      <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{optionName}</Text>
      </View>
      {keyboardArrowRightIcon}
    </TouchableOpacity>
  );
}
export default ProfileOption;