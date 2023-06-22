import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { helpOptDetail as styles } from '../css';
const ExpandedView = ({detail}) => {
  <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{detail}</Text>
`</View>
}
export default ExpandedView;