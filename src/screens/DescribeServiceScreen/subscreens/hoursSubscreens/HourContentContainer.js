//a container that will store all the days and picking hour boxes
import React from 'react';
import { View} from 'react-native';
import { hour as styles } from '../../css';
const HourContentContainer = ({children}) => (
  <View style={styles.hourContentContainer}>
    {children}
  </View>
)
export default HourContentContainer;