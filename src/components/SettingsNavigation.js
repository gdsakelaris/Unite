import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Setting_connected from '../screens/SettingsConnected';
import Setting_lang from '../screens/SettingsLanguage';
import PrivacyAgreementScreen from '../screens/PrivacyAgreementScreen'
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen'

const Stack = createStackNavigator();
function SettingsNavigation(props) {
  return (
    <Stack.Navigator
            screenOptions={{
              headerBackImage: () => (<AntDesign name="arrowleft" size={30} color="#252525" style={{marginLeft: '10%', marginRight: '4%'}}/>),
              headerBackTitle: 'Settings',
              headerTitle:'',
              headerBackTitleStyle: {
                fontSize: 30,
                color: '#252525',
                
              
              },
              headerBackground: () => <View style={{backgroundColor:'white', width: '100%', height: '100%'}}></View>,
              headerStyle: {
                height: 150
              }
            }}>
      <Stack.Screen name='Settings' component={Settings}/>
      <Stack.Screen name= 'Language' component={Setting_lang}/>
      <Stack.Screen name='ConnectedAccount' component={Setting_connected}/>
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen}/>
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen}/>


    </Stack.Navigator>

  );
}



export default SettingsNavigation;