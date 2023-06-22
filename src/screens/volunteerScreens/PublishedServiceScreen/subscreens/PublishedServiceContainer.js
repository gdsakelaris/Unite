import React from 'react';
import { SafeAreaView} from 'react-native';
import { publishedServiceContainer as styles } from '../css';
const PublishedServiceContainer = ({children}) => (
  <SafeAreaView style={styles.publishedServiceContainer}>
    {children}
  </SafeAreaView>
)
export default PublishedServiceContainer;