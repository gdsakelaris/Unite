/**
 * Renders a screen displaying all the connected options for social media platforms.
 * @returns {JSX.Element} A screen displaying connected options.
 */

import React from 'react';
import SettingsConnectedContainer from './subscreens/SettingsConnectedContainer';
import SettingConnectedOpt from './subscreens/SettingConnectedOpt';
const SettingsConnected = () => (
  <SettingsConnectedContainer>
      {/* Render connected options for different social media platforms */}
      <SettingConnectedOpt connectedOptName={'Google'}/>
      <SettingConnectedOpt connectedOptName={'Facebook'}/>
      <SettingConnectedOpt connectedOptName={'Twitter'}/>
      {/* Additional connected options can be added here */}
  </SettingsConnectedContainer>
)
export default SettingsConnected;