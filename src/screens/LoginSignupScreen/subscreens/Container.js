//this file will make a container which store all the contents of all the screens in this folder
import React from 'react';
import { View} from 'react-native';
import { container as styles } from '../css';
const Container = ({children}) => (
  <View style={styles.container}> 
    {children}
  </View>
)
export default Container;