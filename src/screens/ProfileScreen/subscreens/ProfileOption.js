import React from 'react';
import { TouchableOpacity } from 'react-native';
import { getOptionIcon } from '../funtions';
import { Text, Divider } from 'react-native-paper';
import { keyboardArrowRightIcon } from '../icons';
import { profileOption as styles } from '../css';
const ProfileOption = ({optionName, navigateTo, iconName, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} >
      {getOptionIcon(iconName)}
      <Text>{optionName}</Text>
      {keyboardArrowRightIcon}
      <Divider style={styles.rowContainer}/>
    </TouchableOpacity>
  );
}
export default ProfileOption;