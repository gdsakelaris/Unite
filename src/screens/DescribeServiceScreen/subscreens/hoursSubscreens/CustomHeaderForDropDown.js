//custom header for hour drop down
import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { hour as styles } from '../../css';
const CustomHeaderForDropDown = ({headerTitle}) => (
  <View style={styles.customHeaderForDropDownView}>
    <Text variant='headlineMedium' style={styles.customHeaderForDropDown}>{headerTitle}</Text>
  </View>
)
export default CustomHeaderForDropDown;