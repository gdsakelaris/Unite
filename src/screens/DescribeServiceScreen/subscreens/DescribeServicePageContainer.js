/**
 * @file DescribeServicePageContainer.js
 * @description This file makes a container that wraps around all the content of the DescribeServicePage screen
 * @param {React.ReactNode} children - The content to be wrapped by the container.
 */

import React from 'react';
import {TouchableWithoutFeedback, View, Keyboard} from 'react-native';
import { describeServicePageContainer as styles } from '../css';
const DescribeServicePageContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.describeServicePageContainer}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default DescribeServicePageContainer;