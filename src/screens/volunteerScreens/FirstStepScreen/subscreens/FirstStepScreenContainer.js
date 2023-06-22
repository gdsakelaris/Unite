import React from 'react';
import { SafeAreaView } from 'react-native';
import { firstStepScreenContainer as styles } from '../css';
const FirstStepScreenContainer = ({children}) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
)
export default FirstStepScreenContainer;