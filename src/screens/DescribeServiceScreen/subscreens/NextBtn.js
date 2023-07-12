//this file will create a next btn component for the describe service screen that will be used to navigate to the other screen 
import React from 'react';
import { Text, Button } from 'react-native-paper';
import { nextBtn as styles } from '../css';
import {Pressable} from "react-native";

//navigation props
//navigateTo: screen we want to navigate to
const NextBtn = ({navigation, navigateTo}) => (
  <Pressable mode='elevated' style={styles.nextBtnContainer} onPress={() => navigation.navigate(navigateTo)}>
    <Text style={styles.nextBtnLabel}>
      Next
    </Text>
  </Pressable>
)
export default NextBtn;