import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { slider as styles } from '../css';
const Slider = ({onLogin, onSignup, switchToLogin}) => (
  <View style={styles.sliderBox}>
      <TouchableOpacity style={onLogin ? styles.clickedSlider : styles.nonClickedSlider } onPress={() => switchToLogin(true)}>
        <Text style={onLogin ? styles.clickedSliderText : styles.nonClickedSliderText}> Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => switchToLogin(false)}
        style={onSignup ? styles.clickedSlider : styles.nonClickedSlider}
      >
        <Text style={onSignup ? styles.clickedSliderText : styles.nonClickedSliderText}> Sign Up</Text>
      </TouchableOpacity>
  </View>
)
export default Slider;