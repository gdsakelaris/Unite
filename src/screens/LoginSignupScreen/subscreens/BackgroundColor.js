//this file will make a view of the linear gradient background color that displays at the upper part of the login and signup screens
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { gradient as styles } from '../css';
const BackgroundColor = ({children}) => (
  <LinearGradient colors={["#337155", "rgba(251, 164, 135, 0.8)"]}
                  style={styles.gradient}>
    {children}
  </LinearGradient>
)
export default BackgroundColor;