import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Setting_connected from '../screens/SettingsConnected';
import Setting_lang from '../screens/SettingsLanguage';
import PrivacyAgreementScreen from '../screens/PrivacyAgreementScreen'
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';
const Stack = createStackNavigator();
const SettingsNavigation = () => {
  const {fontScale} = useWindowDimensions()
  const {width} = Dimensions.get('window');
  const styles = makeStyle(fontScale, width)
  const headerCustom = () => (<AntDesign name="arrowleft" size={35} color="#252525" style={styles.headerCustomIcon}/>)
  const headerTitleCustom = (title) => (
                                      <View style={styles.headerTitleContainer}>  
                                        <Text style={styles.headerBackTitleStyle}>{title}</Text>
                                      </View>
                                  )
  const settingsHeaderNavigation = (title) => (
    {
      headerBackImage: headerCustom,
      headerTitle: () => headerTitleCustom(title),
      headerBackground: () => <View style={styles.headerBackground}/>,
      headerStyle: styles.headerStyle,
      headerBackTitleVisible: false
    }
  )
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={Settings} options={settingsHeaderNavigation('Settings')}/>
      <Stack.Screen name= 'Language' component={Setting_lang} options={settingsHeaderNavigation('Settings')}/>
      <Stack.Screen name='ConnectedAccount' component={Setting_connected} options={settingsHeaderNavigation('Settings')}/>
      <Stack.Screen name='PrivacyAgreementScreen' component={PrivacyAgreementScreen} options={settingsHeaderNavigation('Privacy & Security')}/>
      <Stack.Screen name='TermsOfServiceScreen' component={TermsOfServiceScreen} options={settingsHeaderNavigation('Terms of Services')}/>
    </Stack.Navigator>

  );
}
const makeStyle = (fontScale, widthOfTheScreen) => StyleSheet.create({
  headerCustomIcon: {
    marginLeft: '35%',
    
    
  },
  headerBackground: {
    backgroundColor:'white', 
    width: '100%', 
    height: '100%'

  },
  headerStyle: {
    height: 150,
    
  },
  headerBackTitleStyle: {
    fontSize: 32 / fontScale,
    color: '#252525',
  },
  headerTitleContainer: {
    width: (widthOfTheScreen - 130),
  }
})


export default SettingsNavigation;