/**
 * HelpPageContainer component.
 * This component serves as a container that wraps around all the contents rendered on the HelpPage screen.
 * It includes functionality to dismiss the virtual keyboard when tapping outside of the keyboard.
 *
 * @component
 * @param {ReactNode} children - The child components to be rendered within the container.
 * @returns {JSX.Element} HelpPageContainer component
 */

import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { helpScreenContainer as styles } from '../css';
const HelpPageContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.helpPageContainer}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
export default HelpPageContainer;