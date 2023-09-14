/**
 * This file makes a Published button for the ThirdStep screen
 * @param {Function} onPress - function for published button when it is pressed.
 */

import React from 'react';
import { Button} from 'react-native-paper';
import { btnSettings } from '../submitBtnProp';
const PublishedBtn = ({onPress}) => (
  <Button onPress={onPress} {...btnSettings}>
    Publish
  </Button>
)
export default PublishedBtn;