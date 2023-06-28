// App.js:
import React, { useState } from 'react';
import LoginSignupScreen from './src/screens/LoginSignupScreen/LoginSignupScreen';
import BottomNavigation from './src/navigations/BottomNavigation'
import { PaperProvider } from 'react-native-paper';
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
      <LoginSignupScreen/>
    </PaperProvider>
    );
  }
}

export default App;