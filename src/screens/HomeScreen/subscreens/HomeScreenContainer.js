import React from 'react';
import { SafeAreaView } from 'react-native';
import { homeScreenContainer as styles} from '../css';
const HomeScreenContainer = ({children}) => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      {children}
    </SafeAreaView>
  );
}
export default HomeScreenContainer;