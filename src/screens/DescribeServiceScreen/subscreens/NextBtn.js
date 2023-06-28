import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { nextBtn as styles } from '../css';

const NextBtn = ({navigation}) => (
  <TouchableOpacity style={styles.nextBtnContainer} onPress={() => navigation.navigate('Third Step')}>
    <View style={styles.nextBtnView}>
        <Text style={styles.nextBtnLabel}>
          Next
        </Text>
    </View>
  </TouchableOpacity>
)
export default NextBtn;