// App.js:
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BottomNavigation from './src/navigations/BottomNavigation'
import Bookmark_Services from './src/screens/BookmarkedServices';
import Community from './src/screens/Community';
import EditProfile from './src/screens/EditProfile';
import Education from './src/screens/Education';
import EducationScreen from './src/screens/EducationScreen';
import Employment from './src/screens/Employment';
import FirstStep from './src/screens/FirstStep';
import HomeScreen from './src/screens/HomeScreen';
import HelpPage from './src/screens/HelpPage';
import { SafeAreaView } from 'react-native';
import PrivacyAgreementScreen from './src/screens/PrivacyAgreementScreen';
import PublishedServices from './src/screens/PublishedServices';
import ServicesFullPage from './src/screens/ServicesFullPage';
import Setting_lang from './src/screens/SettingsLanguage';
import Settings from './src/screens/Settings';
import ProfilePage from './src/screens/ProfilePage';

const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  if (isLoggedIn) {
    return <BottomNavigation />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;