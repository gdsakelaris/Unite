import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodResources from '../../screens/FoodResources';
import ServicesFullPage from '../../screens/ServicesFullPage';
import HeaderNavigation from '../HeaderNavigation';
const FoodNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'FoodResources' component={FoodResources} options={HeaderNavigation('Food Resources')} />
          <Stack.Screen name= 'FoodResourceService' component={ServicesFullPage} options={HeaderNavigation('')}/>
      </Stack.Navigator>
  );
}


export default FoodNavigation;