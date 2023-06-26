import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfileScreen/ProfilePage';
import SettingsNavigation from './SettingsNavigation';
import EditProfile from '../screens/EditProfileScreen/EditProfile'
import Header from './Header';
import BookmarkedServices from '../screens/BookmarkedScreen/BookmarkedServices';
import HelpPage from '../screens/HelpScreen/HelpPage';
const Stack = createStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      {/* Profile */}
      <Stack.Screen name='Profile' component={ProfilePage} options={{headerShown:false}} />

      {/* Edit Profile */}
      <Stack.Screen  name='EditProfile' component={EditProfile} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Profile'}/>
      )}}/>


      {/* Bookmarked Services
      <Stack.Screen /> */}
      <Stack.Screen name='BookmarkedServices' component={BookmarkedServices} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Bookmarked Services'}/>
      )}}/>

      {/* Settings */}
      <Stack.Screen name='SettingsNavigation' component={SettingsNavigation} options={{
        headerShown: false
      }}/>

      {/* Help */}
      <Stack.Screen name='Help' component={HelpPage} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Profile'}/>
      )}}/>

      {/* Log out */}
      {/* <Stack.Screen /> */}
      
    </Stack.Navigator>
    
  );
}
export default ProfileNavigation;