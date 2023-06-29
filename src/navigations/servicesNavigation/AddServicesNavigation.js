import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PublishedServices from '../../screens/volunteerScreens/PublishedServiceScreen/PublishedServices';
import DescribeServicePage from '../../screens/DescribeServiceScreen/DescribeServicePage';
import FirstStep from '../../screens/volunteerScreens/FirstStepScreen/FirstStep';
import ThirdStep from '../../screens/volunteerScreens/ThirdStepScreen/ThirdStep';
import Published from '../../screens/volunteerScreens/ConfirmPublishedScreen/Published';
import Header from '../Header';
const AddServicesNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Published Service' component={PublishedServices} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      <Stack.Screen name='First Step' component={FirstStep} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      <Stack.Screen name='Third Step' component={ThirdStep} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      <Stack.Screen name='Describe Service'component={DescribeServicePage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      <Stack.Screen name='Published Message' component={Published} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      {/* <Stack.Screen/> */}
    </Stack.Navigator>
  );
}
export default AddServicesNavigation;