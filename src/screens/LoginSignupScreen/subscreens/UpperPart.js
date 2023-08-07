//this file will render the upper part of all the screens in this folder
import React from 'react';
import { Image } from 'react-native';
import { upperPart as styles } from '../css';
const UpperPart = () => <Image source={require('../../../images/backgroundImg.png')} style={styles.img}/>

export default UpperPart;