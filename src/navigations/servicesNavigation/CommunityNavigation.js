import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Community from '../../screens/services/Community';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
const CommunityNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Community' component={Community} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Community'}/>
      )}} />
          <Stack.Screen name= 'CommunityService' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default CommunityNavigation;