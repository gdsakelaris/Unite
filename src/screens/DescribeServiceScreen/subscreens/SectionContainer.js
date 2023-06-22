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