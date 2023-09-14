/**
 * @file Settings.js
 * @description This file defines the Settings screen, where users can configure various settings for the application.
 * @param {Object} navigation - The navigation object from React Navigation.
 * @returns {JSX.Element} The Settings screen component.
 */

import React from 'react';
import SettingContainer from './subscreens/SettingContainer';
import { settingsOption } from './listOfSettingOption'; //if want to add more setting option, come to this file and add more options there
import { renderSettingOpt } from './renderSettingOpt';

const Settings = ({ navigation }) => {
  return (
    <SettingContainer>
      {/* Render each setting option based on the settingsOption list */}
      {settingsOption.map((opt, i) => renderSettingOpt(opt, i, navigation))}
    </SettingContainer>
  );
}
export default Settings;
