/**
 * ExpandedView component.
 * This component displays the detailed text that appears when the arrow down button is clicked in the HelpPage.
 *
 * @component
 * @param {string} detail - The detailed text to be displayed.
 * @returns {JSX.Element} ExpandedView component
 */

import React from 'react';
import { Text } from 'react-native-paper';
import { helpOptDetail as styles } from '../css';
const ExpandedView = ({detail}) => (
    <Text style={styles.detailText}>{detail}</Text>
)
export default ExpandedView;