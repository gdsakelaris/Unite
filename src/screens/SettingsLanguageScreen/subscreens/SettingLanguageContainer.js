/**
 * A container component for the SettingsLanguage screen that wraps around the content.
 * Manages the state of the selected language and handles language selection changes.
 * @param {React.ReactNode} children - The child components to be wrapped within this container.
 * @param {string} firstVal - The initial value of the selected language.
 * @returns {JSX.Element} The SettingsLanguage container component.
 */

import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';
const SettingLanguageContainer = ({children, firstVal}) => {
  
  // State to store the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(firstVal);
  

  /**
   * Handles the selection of a new language.
   * @param {string} language - The newly selected language.
   */

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };
  return (
    // RadioButton is the component from 'react-native-paper', which helps to create the setting language screen without needing to write a lot of codes. Checkout RadioButton from react native paper for reference
    <RadioButton.Group onValueChange={newLang => handleLanguageSelection(newLang)} value={selectedLanguage}>
        {children}
    </RadioButton.Group>
  )
}
export default SettingLanguageContainer;