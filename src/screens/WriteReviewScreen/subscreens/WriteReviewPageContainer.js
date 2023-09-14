/**
 * @file WriteReviewPageContainer.js
 * @description This file defines a container component that stores all the content of WriteReview screen.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component for the WriteReview screen.
 */

import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { writeReviewPageContainer as styles } from '../css';
const WriteReviewPageContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default WriteReviewPageContainer;