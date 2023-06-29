import React from 'react';
import { View } from 'react-native';
import { service as styles } from '../css';
function ServiceContainer({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
export default ServiceContainer;