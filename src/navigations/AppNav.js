import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import PickLanguages from '../screens/PickLanguageScreen/PickLanguages';
import BottomNavigation from './BottomNavigation';
import LoginSignupScreen from '../screens/LoginSignupScreen/LoginSignupScreen';
import { useAuth } from '../context/AuthProvider';
const AppNav = () => {
  const Stack = createStackNavigator()
  const {isLoggedIn} = useAuth()
  if (isLoggedIn) {
    return <PaperProvider><BottomNavigation/></PaperProvider>;
  } else {
    return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='PickLanguage' component={PickLanguages}/>
          <Stack.Screen name='LoginSignup'>
          {() => <LoginSignupScreen/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }
}
export default AppNav;