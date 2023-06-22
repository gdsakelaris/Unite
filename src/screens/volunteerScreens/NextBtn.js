import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import { nextButton as styles } from './css';
const NextBtn = () => (
  <View style={styles.nxtButtonContainer}>
      <TouchableOpacity style = {styles.nxtButton}>
        <Text style = {styles.nxtButtonText}>Next</Text>
      </TouchableOpacity>
  </View>
)
export default NextBtn;