import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Employment from '../../screens/Employment';
import ServicesFullPage from '../../screens/ServicesFullPage';
import Header from '../Header';
const EmploymentNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Employment' component={Employment} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Employment'}/>
      )}} />
          <Stack.Screen name= 'EmploymentService' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default EmploymentNavigation;