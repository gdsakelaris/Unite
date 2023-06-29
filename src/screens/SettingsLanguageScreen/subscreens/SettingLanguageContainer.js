import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';
const SettingLanguageContainer = ({children, firstVal}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(firstVal);
  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <RadioButton.Group onValueChange={newLang => handleLanguageSelection(newLang)} value={selectedLanguage}>
        {children}
    </RadioButton.Group>
  )
}
export default SettingLanguageContainer;