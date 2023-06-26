import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { slider as styles } from '../css';
const Slider = ({navigation}) => (
  <View style={styles.sliderBox}>
      <TouchableOpacity style={styles.sliderLogin}>
        <Text style={styles.sliderLoginText}> Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.sliderSignUp}
      >
        <Text style={styles.sliderSignUpText}> Sign Up</Text>
      </TouchableOpacity>
  </View>
)
export default Slider;