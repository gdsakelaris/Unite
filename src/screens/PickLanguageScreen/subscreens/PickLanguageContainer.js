//this file will render a view that stores every subsomponents made up picklanguage screen
import React from 'react';
import { SafeAreaView} from 'react-native';
import {pickLanguageContainerStyle as styles} from '../css'

const PickLanguageContainer = ({children}) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
)
export default PickLanguageContainer;