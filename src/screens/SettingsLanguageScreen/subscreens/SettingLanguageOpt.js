import React from 'react';
import { RadioButton } from 'react-native-paper';
import { settingsLanguage as styles } from '../css';
const SettingLanguageOpt = ({language, i}) => (
  <RadioButton.Item label={language.label} value={language.value} key={i.toString()} style={styles.rowContainer} labelStyle={styles.languageText}/>
)
export default SettingLanguageOpt;