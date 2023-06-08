import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shelter from '../../screens/Shelter';
import ServicesFullPage from '../../screens/ServicesFullPage';
import HeaderNavigation from '../HeaderNavigation';
const ShelterNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Shelter' component={Shelter} options={HeaderNavigation('Shelter')} />
          <Stack.Screen name= 'ShelterService' component={ServicesFullPage} options={HeaderNavigation('')}/>
      </Stack.Navigator>
  );
}


export default ShelterNavigation;