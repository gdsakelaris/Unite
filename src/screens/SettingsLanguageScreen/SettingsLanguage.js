import React from 'react';
import { languageOptions } from './listOfLanguagesOpt';
import SettingLanguageContainer from './subscreens/SettingLanguageContainer';
import SettingLanguageOpt from './subscreens/SettingLanguageOpt';
const SettingsLanguage = () => (
  <SettingLanguageContainer firstVal={languageOptions[0].value}>
    {languageOptions.map((language, i) => <SettingLanguageOpt language={language} key={i.toString()}/>)}
  </SettingLanguageContainer>
)
export default SettingsLanguage;