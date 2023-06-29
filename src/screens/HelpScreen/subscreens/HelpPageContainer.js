import React from 'react';
import { View} from 'react-native';
import { helpScreenContainer as styles } from '../css';
const HelpPageContainer = ({children}) => (
  <View style={styles.helpPageContainer}>
    {children}
  </View>
)
export default HelpPageContainer;