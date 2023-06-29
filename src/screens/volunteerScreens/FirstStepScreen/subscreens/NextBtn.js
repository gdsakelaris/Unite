import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import { nextButton as styles } from '../../css';
const NextBtn = ({navigation}) => (
  <View style={styles.nxtButtonContainer}>
      <TouchableOpacity style = {styles.nxtButton} onPress={() => navigation.navigate('Describe Service')}>
        <Text style = {styles.nxtButtonText}>Next</Text>
      </TouchableOpacity>
  </View>
)
export default NextBtn;