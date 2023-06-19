import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shelter from '../../screens/Shelter';
import ServicesFullPage from '../../screens/ServicesFullPage';
import Header from '../Header';
const ShelterNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Shelter' component={Shelter} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Shelter'}/>
      )}}/>
          <Stack.Screen name= 'ShelterService' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default ShelterNavigation;