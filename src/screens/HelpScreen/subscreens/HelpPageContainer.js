//this file will make a container component that wraps around all the contents rendered on the help screen
import React from 'react';
import { View} from 'react-native';
import { helpScreenContainer as styles } from '../css';
const HelpPageContainer = ({children}) => (
  <View style={styles.helpPageContainer}>
    {children}
  </View>
)
export default HelpPageContainer;