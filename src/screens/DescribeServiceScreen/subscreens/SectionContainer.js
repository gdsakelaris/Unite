//This component will store all the content of a single section including section title, content of section and display it on the Describe Service Page
import React from 'react';
import { View} from 'react-native';
import {section as styles} from '../css' 

const SectionContainer = ({children, style}) => {
  return (
    <View style={[styles.sectionContainer, style]}>
      {children}
    </View>
  );
}

export default SectionContainer;