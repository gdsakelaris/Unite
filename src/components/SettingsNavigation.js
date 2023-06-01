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
const SettingsNavigation = () => {
  const headerCustom = () => (<AntDesign name="arrowleft" size={30} color="#252525" style={styles.headerCustomIcon}/>)
  return (
    <Stack.Navigator
            screenOptions={{
              headerBackImage: headerCustom,
              headerBackTitle: 'Settings',
              headerTitle:'',
              headerBackTitleStyle: styles.headerBackTitleStyle,
              headerBackground: () => <View style={styles.headerBackground}/>,
              headerStyle: styles.headerStyle
            }}>
      <Stack.Screen name='Settings' component={Settings}/>
      <Stack.Screen name= 'Language' component={Setting_lang}/>
      <Stack.Screen name='ConnectedAccount' component={Setting_connected}/>
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen}/>
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen}/>


    </Stack.Navigator>

  );
}
const styles = StyleSheet.create({
  headerCustomIcon: {
    marginLeft: '10%',
    marginRight: '4%'
  },
  headerBackground: {
    backgroundColor:'white', 
    width: '100%', 
    height: '100%'

  },
  headerStyle: {
    height: 150
  },
  headerBackTitleStyle: {
    fontSize: 30,
    color: '#252525', 
  }
})


export default SettingsNavigation;