//this file will make a container component that wraps around all the content of the sign up screen or the content of the login screen 
import React from 'react';
import {View} from 'react-native';
import { container as styles } from '../css';
const Container = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default Container;