//this file will make a view component that displays the resource's image on the service full page screen. 
import React from 'react';
import { View, Image } from 'react-native';
import { serviceFullPageImage as styles } from '../css';
const ServicePageImage = ({source}) => (
  <View style={styles.serviceImageStyle}> 
      <Image source={require('../../../images/food.jpeg')} style={styles.imageStyle}/> 
  </View>
)
export default ServicePageImage;