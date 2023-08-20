import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ViewResourceNav from './servicesNavigation/ViewResourceNav';
import AddServicesNavigation from './servicesNavigation/AddServicesNavigation';
const Stack = createStackNavigator();

const HomeScreenNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />

    {/* resource */}
    <Stack.Screen name='ResourceNav' component={ViewResourceNav} />
    <Stack.Screen name='View Published Service' component={AddServicesNavigation}/>
  </Stack.Navigator>

)
//   <Stack.Screen name='FoodResourceCard' component={FoodNavigation} />
export default HomeScreenNavigation;