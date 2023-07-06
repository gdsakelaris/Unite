//this file will make a slider component that allows user to navigate between the login and sign up screen by simply cliking on the name of the screen that they want to go on the slider
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { slider as styles } from '../css';
const Slider = ({onLogin, onSignup, switchToLogin}) => (
  // slider container
  <View style={styles.sliderBox}>
      {/* slider login option which allows user to navigate to login screen*/}
      <TouchableOpacity style={onLogin ? styles.clickedSlider : styles.nonClickedSlider } onPress={() => switchToLogin(true)}> 
        <Text style={onLogin ? styles.clickedSliderText : styles.nonClickedSliderText}> Log in</Text>
      </TouchableOpacity>

      {/* slider sign up option which allows user to navigate to sign up screen */}
      <TouchableOpacity
        onPress={() => switchToLogin(false)}
        style={onSignup ? styles.clickedSlider : styles.nonClickedSlider}
      >
        <Text style={onSignup ? styles.clickedSliderText : styles.nonClickedSliderText}> Sign Up</Text>
      </TouchableOpacity>
  </View>
)
export default Slider;