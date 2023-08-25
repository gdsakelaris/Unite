/**
 * @file ScrollListOfReviews.js
 * @description This file defines a container component that wraps around all the reviews of a resource.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @returns {JSX.Element} A container component wrapping around the reviews of a resource.
 */

import React from 'react';
import { View, ScrollView} from 'react-native';
import { listOfReviewsContainer as styles } from '../css';
const ScrollListOfReviews = ({children}) => (
  <View style={styles.container}>
    <ScrollView>
      {children}
    </ScrollView>
  </View>
)
export default ScrollListOfReviews;