import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Health_Resource from '../../screens/Health';
import ServicesFullPage from '../../screens/ServicesFullPage';
import HeaderNavigation from '../HeaderNavigation';
const HealthNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Health' component={Health_Resource} options={HeaderNavigation('Health')} />
          <Stack.Screen name= 'HealthService' component={ServicesFullPage} options={HeaderNavigation('')}/>
      </Stack.Navigator>
  );
}


export default HealthNavigation;