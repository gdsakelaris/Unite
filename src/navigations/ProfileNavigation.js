import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfilePage';
import SettingsNavigation from './SettingsNavigation';
import EditProfile from '../screens/EditProfile';
import HeaderNavigation from './HeaderNavigation';
import Bookmark_Services from '../screens/BookmarkedServices';
import HelpPage from '../screens/HelpPage';
const Stack = createStackNavigator();


const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      {/* Profile */}
      <Stack.Screen name='Profile' component={ProfilePage} options={{headerShown:false}} />

      {/* Edit Profile */}
      <Stack.Screen  name='EditProfile' component={EditProfile} options={HeaderNavigation('Profile')}/>


      {/* Bookmarked Services
      <Stack.Screen /> */}
      <Stack.Screen name='BookmarkedServices' component={Bookmark_Services} options={HeaderNavigation('Bookmarked Services')}/>

      {/* Settings */}
      <Stack.Screen name='SettingsNavigation' component={SettingsNavigation} options={{
        headerShown: false
      }}/>

      {/* Help */}
      <Stack.Screen name='Help' component={HelpPage} options={HeaderNavigation('Profile')}/>

      {/* Log out */}
      {/* <Stack.Screen /> */}
      
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

export default ProfileNavigation;