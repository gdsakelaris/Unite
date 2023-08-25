/**
 * Renders a title message for screens.
 *
 * @component
 * @param {string} titleMessage - The title message to display.
 * @param {Object} style - Additional styles for the title.
 * @param {Object} textProps - Additional props for the Text component.
 * @returns {JSX.Element} The ScreenTitle component.
 */

import React from 'react';
import { Text } from 'react-native-paper';
import { screenTitle as styles } from './css';
const ScreenTitle = ({titleMessage, style, ...textProps}) => (
  // Ultilize text component from react navive paper for the title because the component provides prop that switch the style to dark theme. Go to react native paper and check out Text component for more reference
  <Text style={[styles.screenTitle, style]} {...textProps}>{titleMessage}</Text>
)

export default ScreenTitle;