import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Health from '../../screens/services/Health'
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
import WriteReview from '../../screens/WriteReviewScreen/WriteReview';
import Review from '../../screens/ViewReviewScreen/Review';
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
          <Stack.Screen name= 'Review' component={Review} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Reviews'}/>
      )}}/>
          <Stack.Screen name= 'Write a Review' component={WriteReview} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Write a Review'}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default HealthNavigation;