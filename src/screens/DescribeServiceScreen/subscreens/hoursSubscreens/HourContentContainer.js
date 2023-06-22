import React from 'react';
import { View} from 'react-native';
import { hour as styles } from '../../css';
const HourContentContainer = ({children}) => (
  <View style={styles.hourContentContainer}>
    {children}
  </View>
)
export default HourContentContainer;