//this file will render a view that wraps around all the contents of the describeService page
import React from 'react';
import { View} from 'react-native';
import { describeServicePageContainer as styles } from '../css';
const DescribeServicePageContainer = ({children}) => (
  <View style={styles.describeServicePageContainer}>
    {children}
  </View>
)
export default DescribeServicePageContainer;