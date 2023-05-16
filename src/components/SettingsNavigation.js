import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import ConnectedAccount from '../screens/ConnectedAccount';
import Language from '../screens/Language';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const Stack = createStackNavigator();
function SettingsNavigation(props) {
  return (
    <Stack.Navigator
            screenOptions={{
              headerBackImage: () => (<AntDesign name="arrowleft" size={30} color="#252525" style={{marginLeft: '10%', marginRight: '4%'}}/>),
              headerBackTitle: 'Settings',
              headerTitle:'',
              headerBackTitleStyle: {
                fontSize: 24,
                color: '#252525',
                
              
              },
              headerBackground: () => <View style={{backgroundColor:'#f2f2f2', width: '100%', height: '100%'}}></View>,
              headerStyle: {
                height: 150
              }
            }}>
      <Stack.Screen name='Settings' component={Settings}/>
      <Stack.Screen name= 'Language' component={Language}/>
      <Stack.Screen name='ConnectedAccount' component={ConnectedAccount}/>


    </Stack.Navigator>

  );
}



export default SettingsNavigation;