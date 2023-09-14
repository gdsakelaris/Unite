/**
 * SettingsNavigation component.
 * This component sets up the navigation stack for the settings-related screens.
 *
 * @component
 * @returns {JSX.Element} SettingsNavigation component
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/SettingsScreen/Settings';
import SettingsConnected from '../screens/SettingsConnectedScreen/SettingsConnected'
import SettingsLanguage from '../screens/SettingsLanguageScreen/SettingsLanguage'
import PrivacyAgreementScreen from '../screens/PolicyScreens/PrivacyAgreementScreen'
import TermsOfServiceScreen from '../screens/PolicyScreens/TermsOfServiceScreen'
import Header from './Header';
const Stack = createStackNavigator();
const SettingsNavigation = () => {
  return (
    <Stack.Navigator>

      {/* Settings */}
      <Stack.Screen name='Settings' component={Settings} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>

      {/* Settings */}
      <Stack.Screen name= 'Language' component={SettingsLanguage} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>

      {/* Connected Account */}
      <Stack.Screen name='ConnectedAccount' component={SettingsConnected} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>

      {/* Privacy Agreement Screen */}
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Privacy & Security'}/>
      )}}/>

      {/* Terms of Service Screen */}
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Terms of Services'}/>
      )}}/>
    </Stack.Navigator>

  );
}



export default SettingsNavigation;