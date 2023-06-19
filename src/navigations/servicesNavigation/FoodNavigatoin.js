import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodResources from '../../screens/FoodResources';
import ServicesFullPage from '../../screens/ServicesFullPage';
import Header from '../Header';
const FoodNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'FoodResources' component={FoodResources} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Food Resources'}/>
      )}} />
          <Stack.Screen name= 'FoodResourceService' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default FoodNavigation;