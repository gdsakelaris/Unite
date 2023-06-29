import React from 'react';
import { View } from 'react-native';
import { bookmarkedScreenContainer as styles } from '../css';
const BookmarkedScreenContainer = ({children}) => (
  <View style={styles.bookmarkedScreenContainer} >
    {children}
  </View>
)
export default BookmarkedScreenContainer;