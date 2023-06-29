// App.js:
import React, { useState } from 'react';
import LoginSignupScreen from './src/screens/LoginSignupScreen/LoginSignupScreen';
import BottomNavigation from './src/navigations/BottomNavigation'
import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import PickLanguages from './src/screens/PickLanguageScreen/PickLanguages';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createStackNavigator()
  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  if (isLoggedIn) {
    return <PaperProvider><BottomNavigation/></PaperProvider>;
  } else {
    return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='PickLanguage' component={PickLanguages}/>
          <Stack.Screen name='LoginSignup'>
          {() => <LoginSignupScreen onLogin={handleLogin}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }
}

export default App;