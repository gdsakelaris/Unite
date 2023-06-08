import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfilePage';
import SettingsNavigation from './SettingsNavigation';
const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>

      {/* Profile */}
      <Stack.Screen name='Profile' component={ProfilePage} />

      {/* Bookmarked Services
      <Stack.Screen /> */}

      {/* Settings */}
      <Stack.Screen name='SettingsNavigation' component={SettingsNavigation} options={{
        headerShown: false
      }} />

      {/* Help */}
      {/* <Stack.Screen /> */}

      {/* Log out */}
      {/* <Stack.Screen /> */}

    </Stack.Navigator>

  );
}



export default ProfileNavigation;