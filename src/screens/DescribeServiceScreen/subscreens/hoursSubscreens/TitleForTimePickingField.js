//title of the picking hour field 
import React from 'react';
import { Text } from 'react-native-paper';
import { hour as styles } from '../../css';
const TitleForTimePickingField = ({title}) => (
  <Text style={styles.titleForTimePickingField}>
      {title}
  </Text>
)
export default TitleForTimePickingField;