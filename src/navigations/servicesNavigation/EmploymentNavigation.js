import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Employment from '../../screens/Employment';
import ServicesFullPage from '../../screens/ServicesFullPage';
import HeaderNavigation from '../HeaderNavigation';
const EmploymentNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Employment' component={Employment} options={HeaderNavigation('Employment')} />
          <Stack.Screen name= 'EmploymentService' component={ServicesFullPage} options={HeaderNavigation('')}/>
      </Stack.Navigator>
  );
}


export default EmploymentNavigation;