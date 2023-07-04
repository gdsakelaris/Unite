//this file will create a title component for each section on the DescribeServicePage.
import React from 'react';
import { View} from 'react-native';
import {section as styles} from '../css'
import { Text } from 'react-native-paper';

const SectionTitle = ({title, sectionTitleContainer}) => (
   <View style={[styles.titleSectionContainer, sectionTitleContainer]}>
      <Text style={styles.titleSection}>
          {title}
      </Text>
   </View>
)
export default SectionTitle;