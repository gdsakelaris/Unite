import React from 'react';
import { View, Image } from 'react-native';
import { serviceFullPageImage as styles } from '../css';
const ServicePageImage = ({source}) => (
  <View style={styles.serviceImageStyle}> 
      <Image source={require('../../../images/food.jpeg')} style={styles.imageStyle}/>
  </View>
)
export default ServicePageImage;