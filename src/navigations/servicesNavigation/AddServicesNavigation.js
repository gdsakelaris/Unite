import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PublishedServices from '../../screens/volunteerScreens/PublishedServiceScreen/PublishedServices';
import DescribeServicePage from '../../screens/DescribeServiceScreen/DescribeServicePage';
import FirstStep from '../../screens/volunteerScreens/FirstStepScreen/FirstStep';
import ThirdStep from '../../screens/volunteerScreens/ThirdStepScreen/ThirdStep';
/**
 * AddServicesNavigation component.
 * This component sets up a navigation stack for various screens related to adding services.
 *
 * @component
 * @returns {JSX.Element} AddServicesNavigation component
 */

import Published from '../../screens/volunteerScreens/ConfirmPublishedScreen/Published';
import Header from '../Header';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import GetStarted from '../../screens/volunteerScreens/GetStartedScreen/GetStarted';
const AddServicesNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: { display: 'none' },
      }}
    >
       {/* Screen for displaying the list of published services */}
      <Stack.Screen name='Published Service' component={PublishedServices} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
        )}}/>

        {/* Screen for the initial "Get Started" step */}
      <Stack.Screen name='Get Started' component={GetStarted} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>

      {/* Screen for the first step in adding a service */}
      <Stack.Screen name='First Step' component={FirstStep} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>

      {/* Screen for the third step in adding a service */}
      <Stack.Screen name='Third Step' component={ThirdStep} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>

      {/* Screen for describing the details of a service */}
      <Stack.Screen name='Describe Service'component={DescribeServicePage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>

      {/* Screen for displaying a published message */}
      <Stack.Screen name='Published Message' component={Published} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>
      )}}/>
      
       {/* Screen for viewing the details of a resource */}
      <Stack.Screen name= 'View Resource' component={ServicesFullPage} options={{header: ({navigation}) => (
        <Header navigation={navigation}/>)}}/>

      {/* <Stack.Screen/> */}
    </Stack.Navigator>
  );
}
export default AddServicesNavigation;