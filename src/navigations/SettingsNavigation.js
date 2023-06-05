import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import Setting_connected from '../screens/SettingsConnected';
import Setting_lang from '../screens/SettingsLanguage';
import PrivacyAgreementScreen from '../screens/PrivacyAgreementScreen'
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen'
import HeaderNavigation from './HeaderNavigation';
const Stack = createStackNavigator();
const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={Settings} options={HeaderNavigation('Settings')}/>
      <Stack.Screen name= 'Language' component={Setting_lang} options={HeaderNavigation('Settings')}/>
      <Stack.Screen name='ConnectedAccount' component={Setting_connected} options={HeaderNavigation('Settings')}/>
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen} options={HeaderNavigation('Privacy & Security')}/>
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen} options={HeaderNavigation('Terms of Services')}/>
    </Stack.Navigator>

  );
}



export default SettingsNavigation;