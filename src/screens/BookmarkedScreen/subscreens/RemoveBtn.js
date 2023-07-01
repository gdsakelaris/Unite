//the remove button which will be used to remove the resource card on the bookmarked service
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { removeBtn as styles } from '../css';
const RemoveBtn = () => (
  <Button style={styles.removeButton} mode='elevated' onPress={()=> console.log('removed btn clicked')}>
    <Text style={styles.removeButtonText}>Remove</Text>
  </Button>
)
export default RemoveBtn;