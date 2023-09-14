/**
 * HomeScreenNavigation component.
 * This component sets up the navigation stack for the home screen and related screens.
 *
 * @component
 * @returns {JSX.Element} HomeScreenNavigation component
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AnyResource from '../screens/services/AnyResource';
import AddServicesNavigation from './servicesNavigation/AddServicesNavigation';
import ServicesFullPage from '../screens/ServiceFullPageScreen/ServicesFullPage';
const Stack = createStackNavigator();

const HomeScreenNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    {/* Home Screen */}
    <Stack.Screen name="HomeScreen" component={HomeScreen} />

    {/* View Resource Full Page */}
    <Stack.Screen name='ViewResource' component={ServicesFullPage}/>

    {/* Any Resource Screen */}
    <Stack.Screen name="AnyResource" component={AnyResource} />

    {/* View Published Service Screen */}
    <Stack.Screen name='View Published Service' component={AddServicesNavigation}/>
  </Stack.Navigator>
);

export default HomeScreenNavigation;
