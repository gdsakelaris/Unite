/**
 * RemoveBtn component.
 * This component creates a remove button to be used for removing resource cards
 * from the bookmarked service screen.
 *
 * @component
 * @param {Function} onPress - The function to be called when the button is pressed.
 * @returns {JSX.Element} RemoveBtn component
 */

import React from 'react';
import { Text, Button } from 'react-native-paper';
import { removeBtn as styles } from '../css';
import {Pressable} from "react-native";
const RemoveBtn = ({onPress}) => (
  // Ultilize text component from react navive paper for the title because the component provides prop that switch the style to dark theme. Go to react native paper and check out Text component for more reference
  <Pressable style={styles.removeButton} mode='elevated' onPress={onPress}>
    <Text style={styles.removeButtonText}>Remove</Text>
  </Pressable>
)
export default RemoveBtn;