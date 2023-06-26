// App.js:
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import SignUpScreen from './src/screens/SignupScreen/SignUpScreen'
import BottomNavigation from './src/navigations/BottomNavigation'
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  if (isLoggedIn) {
    return <PaperProvider><BottomNavigation/></PaperProvider>;
  } else {
    return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }
}

export default App;