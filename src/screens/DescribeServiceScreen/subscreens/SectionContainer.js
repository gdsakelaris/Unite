//This component will store all the content of a single section in the DescribeServicePage, including section title, content of section
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