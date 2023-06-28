import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { submitBtn as styles } from '../css';
const SubmitBtn = () => {
  return (
    <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Review</Text>
    </TouchableOpacity>
  );
}
export default SubmitBtn;