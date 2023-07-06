//this file will make a container component that wraps around all the content of the service full page screen
import React from 'react';
import { View } from 'react-native';
import { serviceFullPageContainer as styles } from '../css';
const ServicePageContainer = ({children}) => (
  <View style={styles.serviceFullPagecontainer}>
    {children}
  </View>
)
export default ServicePageContainer;