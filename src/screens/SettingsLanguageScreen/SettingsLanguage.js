/**
 * The SettingsLanguage screen where the user can choose their preferred language settings.
 * Displays a list of language options that the user can select.
 * @returns {JSX.Element} The SettingsLanguage screen component.
 */

import React from 'react';
import { languageOptions } from './listOfLanguagesOpt';
import SettingLanguageContainer from './subscreens/SettingLanguageContainer';
import SettingLanguageOpt from './subscreens/SettingLanguageOpt';
const SettingsLanguage = () => (
  <SettingLanguageContainer firstVal={languageOptions[0].value}>
    {/* list of supported langs */}
    {languageOptions.map((language, i) => <SettingLanguageOpt language={language} key={i.toString()}/>)}
  </SettingLanguageContainer>
)
export default SettingsLanguage;