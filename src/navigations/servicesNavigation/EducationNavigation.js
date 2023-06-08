import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Education from '../../screens/Education';
import ServicesFullPage from '../../screens/ServicesFullPage';
import HeaderNavigation from '../HeaderNavigation';
const EducationNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Education' component={Education} options={HeaderNavigation('Education')} />
          <Stack.Screen name= 'EducationService' component={ServicesFullPage} options={HeaderNavigation('')}/>
      </Stack.Navigator>
  );
}


export default EducationNavigation;