/**
 * Title component.
 * This component displays the title for the HelpPage screen.
 *
 * @component
 * @param {string} title - The title to be displayed on the screen.
 * @returns {JSX.Element} Title component
 */

import React from 'react';
import { Text } from 'react-native-paper'; // Ultilize text component from react navive paper for the title because the component provides prop that switch the style to dark theme. Go to react native paper and check out Text component for more reference
import { title as styles} from '../css';
const Title = ({title}) => (
  <Text style={styles.title}>{title}</Text>
)
export default Title;