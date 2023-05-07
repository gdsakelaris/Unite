import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import BottomNavigation from './src/components/BottomNavigation';
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // return isLoggedIn ? <BottomNavigation /> : <LoginScreen onLogin={handleLogin} />;
  return (
    <HomeScreen></HomeScreen>
  )
}

export default App;
