import React from 'react';
import {View} from 'react-native';
import { loginScreenContainer as styles } from '../css';
const Container = ({children}) => (
  <View style={styles.loginContainer}>
    {children}
  </View>
)
export default Container;