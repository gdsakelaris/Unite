import React from 'react';
import { View} from 'react-native';
import {section as styles} from '../css'
import { Text } from 'react-native-paper';

const SectionTitle = ({title}) => (
   <View style={styles.titleSectionContainer}>
      <Text style={styles.titleSection}>
          {title}
      </Text>
   </View>
)
export default SectionTitle;