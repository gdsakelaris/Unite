import React from 'react';
import { View } from 'react-native';
import { confirmPublishedContainer as styles } from '../css';
const ConfirmPublishedScreenContainer = ({children}) => (
  <View style={styles.confirmPublishedContainer}>
    {children}
  </View>
)
export default ConfirmPublishedScreenContainer;