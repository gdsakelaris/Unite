import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodResources from '../../screens/services/FoodResources';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
import WriteReview from '../../screens/WriteReviewScreen/WriteReview';
import Review from '../../screens/ViewReviewScreen/Review';
const FoodResourceNavigation = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name= 'Food Resource' component={FoodResources} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Food Resources'}/>
      )}} />
          <Stack.Screen name= 'FoodResourceService' component={ServicesFullPage} options={{header: ({navigation}) => (
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


export default FoodResourceNavigation;