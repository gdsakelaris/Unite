import React, { useState } from "react";
import {StyleSheet } from "react-native";
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { RadioButton } from 'react-native-paper';

const languageOptions = [
  { label: "English", value: "english" },
  { label: "Spanish", value: "spanish" },
  { label: "French", value: "french" },
  { label: "Germany", value: "germany" },
  { label: "Italian", value: "italian"},
  { label: "Russian", value: "russian" },
  { label: "Mandarin Chinese", value: "madarin" },
  { label: "Arabic", value:"arabic" },
];

const Setting_lang = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0].value);
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <RadioButton.Group onValueChange={newLang => handleLanguageSelection(newLang)} value={selectedLanguage}>
      {languageOptions.map((language, i) => 
                                  <RadioButton.Item label={language.label} value={language.value} key={i.toString()} style={styles.rowContainer} labelStyle={styles.languageText}/>)}
    </RadioButton.Group>
  );
};

const makeStyle = fontScale => StyleSheet.create({
  rowContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 80 
  },
  languageText: {
    marginLeft: '4%',
    flex: 1,
    fontSize: 18 / fontScale,
  },
});
export default Setting_lang;
