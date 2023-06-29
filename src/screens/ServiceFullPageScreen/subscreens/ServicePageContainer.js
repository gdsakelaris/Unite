import React from 'react';
import { View } from 'react-native';
import { serviceFullPageContainer as styles } from '../css';
const ServicePageContainer = ({children}) => (
  <View style={styles.serviceFullPagecontainer}>
    {children}
  </View>
)
export default ServicePageContainer;