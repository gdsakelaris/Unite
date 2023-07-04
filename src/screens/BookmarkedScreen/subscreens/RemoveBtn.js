//the file will make a remove button component which will be used to remove the resource card on the bookmarked service screen
import React from 'react';
import { Text, Button } from 'react-native-paper';
import { removeBtn as styles } from '../css';
const RemoveBtn = () => (
  <Button style={styles.removeButton} mode='elevated' onPress={()=> console.log('removed btn clicked')}>
    <Text style={styles.removeButtonText}>Remove</Text>
  </Button>
)
export default RemoveBtn;