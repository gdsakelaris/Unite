import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Community from '../../screens/Community';
import ServicesFullPage from '../../screens/ServicesFullPage';
import HeaderNavigation from '../HeaderNavigation';
const CommunityNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Community' component={Community} options={HeaderNavigation('Community')} />
          <Stack.Screen name= 'CommunityService' component={ServicesFullPage} options={HeaderNavigation('')}/>
      </Stack.Navigator>
  );
}


export default CommunityNavigation;