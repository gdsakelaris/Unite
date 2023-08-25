/**
 * @file UpperPart.js
 * @description This file renders the upper part of both LoginScreen and SignupScreen.
 */

import React from 'react';
import { Image } from 'react-native';
import { upperPart as styles } from '../css';
const UpperPart = () => <Image source={require('../../../images/backgroundImg.png')} style={styles.img}/>

export default UpperPart;