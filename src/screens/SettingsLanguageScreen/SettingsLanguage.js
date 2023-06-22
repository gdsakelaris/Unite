import React from 'react';
import { languageOptions } from './listOfLanguagesOpt';
import SettingLanguageContainer from './subscreens/SettingLanguageContainer';
import SettingLanguageOpt from './subscreens/SettingLanguageOpt';
const SettingsLanguage = () => (
  <SettingLanguageContainer firstVal={languageOptions[0].value}>
    {languageOptions.map((language, i) => <SettingLanguageOpt i={i} language={language}/>)}
  </SettingLanguageContainer>
)
export default SettingsLanguage;