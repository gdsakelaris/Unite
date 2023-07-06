import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Education from '../../screens/services/Education';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import Header from '../Header';
import Review from '../../screens/ViewReviewScreen/Review';
import WriteReview from '../../screens/WriteReviewScreen/WriteReview';
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
          <Stack.Screen name= 'Review' component={Review} options={{header: ({navigation}) => (
      <Header navigation={navigation} title={'Reviews'}/>
    )}}/>
          <Stack.Screen name= 'Write a Review' component={WriteReview} options={{header: ({navigation}) => (
        <Header navigation={navigation} title={'Write a Review'}/>
      )}}/>
      </Stack.Navigator>
  );
}


export default EducationNavigation;