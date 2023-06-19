import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import Setting_connected from '../screens/SettingsConnected';
import Setting_lang from '../screens/SettingsLanguage';
import PrivacyAgreementScreen from '../screens/PrivacyAgreementScreen'
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen'
import Header from './Header';
const Stack = createStackNavigator();
const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={Settings} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>
      <Stack.Screen name= 'Language' component={Setting_lang} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>
      <Stack.Screen name='ConnectedAccount' component={Setting_connected} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Settings'}/>
      )}}/>
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Privacy & Security'}/>
      )}}/>
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Terms of Services'}/>
      )}}/>
    </Stack.Navigator>

  );
}



export default SettingsNavigation;