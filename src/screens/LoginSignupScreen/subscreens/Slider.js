//this file will make a slider component that allows user to navigate between the login and sign up screen by simply cliking on the name of the screen that they want to go on the slider
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { slider as styles } from '../css';
import { useAuth } from '../../../context/AuthProvider';
const Slider = () => {
  // slider container
  const {inLoginPage, switchPage} = useAuth()
  return (
    <View style={styles.sliderBox}>
      {/* slider login option which allows user to navigate to login screen*/}
      <TouchableOpacity style={inLoginPage ? styles.clickedSlider : styles.nonClickedSlider } onPress={switchPage}> 
        <Text style={inLoginPage ? styles.clickedSliderText : styles.nonClickedSliderText}> Log in</Text>
      </TouchableOpacity>

      {/* slider sign up option which allows user to navigate to sign up screen */}
      <TouchableOpacity
        onPress={switchPage}
        style={!inLoginPage ? styles.clickedSlider : styles.nonClickedSlider}
      >
        <Text style={!inLoginPage ? styles.clickedSliderText : styles.nonClickedSliderText}> Sign Up</Text>
      </TouchableOpacity>
  </View>)
}
export default Slider;