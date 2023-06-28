import React from 'react';
import { View} from 'react-native';
import { previewServiceContainer as styles } from '../css';
const PreviewServiceContainer = ({children}) => (
  <View style={styles.previewServiceContainer}>
    {children}
  </View>
)
export default PreviewServiceContainer;