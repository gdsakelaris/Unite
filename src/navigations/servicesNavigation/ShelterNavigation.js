import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  Shelter from '../../screens/services/Shelter'
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
import Review from '../../screens/ViewReviewScreen/Review';
import WriteReview from '../../screens/WriteReviewScreen/WriteReview';
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
          <Stack.Screen name= 'Review' component={Review} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Reviews'}/>
      )}}/>
          <Stack.Screen name= 'Write a Review' component={WriteReview} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Write a Review'}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default ShelterNavigation;