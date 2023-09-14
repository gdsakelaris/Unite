/**
 * A component that represents an edit button for a resource card.
 *
 * @function
 * @param {string} text - The text to be displayed on the edit button.
 * @param {function} onPress - The function to be executed when the edit button is pressed.
 * @returns {JSX.Element} - A component that displays an edit button for the resource card.
 */

import React from 'react';
import {Button} from 'react-native-paper';
import { resourceCard as styles } from '../../css';
const EditButton = ({text, onPress}) => (
  <Button mode='elevated' style={styles.editbtn} labelStyle={styles.edtbtntxt} onPress={onPress}>
      {text}
  </Button>
)
export default EditButton;