import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Health from '../../screens/services/Health'
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
const HealthNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Health' component={Health} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Health'}/>
      )}} />
          <Stack.Screen name= 'HealthService' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default HealthNavigation;