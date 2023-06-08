import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EducationNavigation from './servicesNavigation/EducationNavigation';
import CommunityNavigation from './servicesNavigation/CommunityNavigation';
import EmploymentNavigation from './servicesNavigation/EmploymentNavigation';
import FoodNavigation from './servicesNavigation/FoodNavigatoin';
import HealthNavigation from './servicesNavigation/HealthNavigation';
import ShelterNavigation from './servicesNavigation/ShelterNavigation';
const Stack = createStackNavigator();
const HomeScreenNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />

    {/* each resource should have a separate navigation */}
    <Stack.Screen name='EducationCard' component={EducationNavigation}/>
    <Stack.Screen name='ShelterCard' component={ShelterNavigation}  />
    <Stack.Screen name='FoodResourceCard' component={FoodNavigation} />
    <Stack.Screen name='CommunityCard' component={CommunityNavigation} />
    <Stack.Screen name='EmploymentCard' component={EmploymentNavigation}  />
    <Stack.Screen name='HealthCard' component={HealthNavigation} />
    

  </Stack.Navigator>

)
export default HomeScreenNavigation;