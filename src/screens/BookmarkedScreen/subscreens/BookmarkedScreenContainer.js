/**
 * BookmarkedScreenContainer component.
 * This component wraps the content of the bookmarked service screen.
 *
 * @component
 * @param {React.ReactNode} children - The content to be wrapped by the container.
 * @returns {JSX.Element} BookmarkedScreenContainer component
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import { bookmarkedScreenContainer as styles } from '../css';
const BookmarkedScreenContainer = ({children}) => (
  <View style={styles.bookmarkedScreenContainer}>
    {children}
  </View>
)
export default BookmarkedScreenContainer;