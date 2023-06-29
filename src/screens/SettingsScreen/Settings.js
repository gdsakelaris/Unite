import React from 'react';
import SettingContainer from './subscreens/SettingContainer';
import { settingsOption } from './listOfSettingOption';
import { renderSettingOpt } from './renderSettingOpt';
const Settings = ({ navigation }) => {
  return (
    <SettingContainer>
      {settingsOption.map((opt, i) => renderSettingOpt(opt, i, navigation))}
    </SettingContainer>
  );
}
export default Settings;
