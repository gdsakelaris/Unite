import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AnyResource from '../screens/services/AnyResource';

const Stack = createStackNavigator();

const HomeScreenNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AnyResource" component={AnyResource} />

    {/* Dynamic AnyResource screen */}
    <Stack.Screen
      name="AnyResourceScreen"
      component={AnyResource}
      options={({ route }) => ({
        title: route.params.resourceName, // Set the header title based on the selected resource
      })}
    />
  </Stack.Navigator>
);

export default HomeScreenNavigation;
