/**
 * @file ReviewContainer.js
 * @description This file defines a container component that wraps around all the content of the review screen.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component wrapping around the content of the review screen.
 */

import React from 'react';
import { View} from 'react-native';
import { reviewContainer as styles } from '../css';
const ReviewContainer = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default ReviewContainer;