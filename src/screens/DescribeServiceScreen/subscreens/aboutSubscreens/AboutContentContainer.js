//this file will make a container component that will store all the content of the about section
import React from 'react';
import { View } from 'react-native';
import { about as styles } from '../../css';

const AboutContentContainer = ({children}) => (
  <View style={styles.contentContainer}>
    {children}
  </View>
)
export default AboutContentContainer;