/**
 * ViewResourceNav component.
 * This component sets up a navigation stack for viewing resources and related screens.
 *
 * @component
 * @returns {JSX.Element} ViewResourceNav component
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnyResource from '../../screens/services/AnyResource';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
import Review from '../../screens/ViewReviewScreen/Review';
import WriteReview from '../../screens/WriteReviewScreen/WriteReview';
const ViewResourceNav = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
         {/* Screen for viewing a list of all resources */}
          <Stack.Screen name= 'View All Resources' component={AnyResource} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>

          {/* Screen for viewing the details of a resource */}
          <Stack.Screen name= 'View Resource' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>

            {/* Screen for viewing reviews */}
          <Stack.Screen name= 'Review' component={Review} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Reviews'}/>
      )}}/>

            {/* Screen for writing a review */}
          <Stack.Screen name= 'Write a Review' component={WriteReview} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Write a Review'}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default ViewResourceNav;