/**
 * @file SectionTitle.js
 * @description This file render the title for a single section such as add image, write reivew on the WriteReview screen .
 * @param {string} title - Name of the section.
 * @returns {JSX.Element} The SectionTitle component.
 */

import React from 'react';
import { Text } from 'react-native-paper'; //Ultilized Text component from react native paper because it provides a prop that can change the color of text to darkmode
import { sectionTitle as styles } from '../css';
const SectionTitle = ({title}) => (
  <Text style={styles.title}>{title}</Text>
)
export default SectionTitle;