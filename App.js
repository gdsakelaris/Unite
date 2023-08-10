// App.js:
import React from 'react';
import AppNav from './src/navigations/AppNav';
import { AuthProvider } from './src/context/AuthProvider';
const App = () => (
<AuthProvider>
    <AppNav/>
</AuthProvider>)

export default App;