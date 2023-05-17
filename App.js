
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import BottomNavigation from './src/components/BottomNavigation';
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
import Setting_lang from './src/screens/SettingsLanguage';
import Setting_connected from './src/screens/SettingsConnected';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


<<<<<<< HEAD
  if (isLoggedIn)  {
    return (
      <BottomNavigation />
    );
  } else {
    return (
      <LoginScreen onLogin={handleLogin} />
    );

    }

=======
  return <Setting_connected></Setting_connected>;
>>>>>>> Yash-Unite-Demo

}

export default App;
