/**
 * HomeScreenContainer component.
 * This component serves as a container that wraps around all the content rendered on the HomeScreen.
 * It includes a SafeAreaView and uses TouchableWithoutFeedback to dismiss the virtual keyboard when tapping on the screen.
 *
 * @component
 * @param {Object} children - The child components or elements to be rendered within the container.
 * @returns {JSX.Element} HomeScreenContainer component
 */

import React from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { homeScreenContainer as styles} from '../css';
const HomeScreenContainer = ({children}) => {
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.homeScreenContainer}>
        {children}
      </SafeAreaView>
  </TouchableWithoutFeedback>
  );
}
export default HomeScreenContainer;