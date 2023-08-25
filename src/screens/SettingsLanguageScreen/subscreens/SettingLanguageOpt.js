/**
 * A placeholder that displays the supported language 
 * @param {Object} language - The language object containing label and value properties.
 * @returns {JSX.Element} The SettingLanguageOpt component.
 */

import React from 'react';
import { RadioButton } from 'react-native-paper';
import { settingsLanguage as styles } from '../css';
const SettingLanguageOpt = ({language, i}) => (
  // RadioButton is the component from 'react-native-paper', which helps to create the setting language screen without needing to write a lot of codes. Check out RadioButton in react native paper for reference
  <RadioButton.Item label={language.label} value={language.value} style={styles.rowContainer} labelStyle={styles.languageText}/>
)
export default SettingLanguageOpt;