import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Education from '../../screens/services/Education';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
const EducationNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Education' component={Education} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Education'}/>
      )}} />
          <Stack.Screen name= 'EducationService' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default EducationNavigation;