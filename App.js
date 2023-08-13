// App.js:
import React from 'react';
import AppNav from './src/navigations/AppNav';
import { AuthProvider } from './src/context/AuthProvider';
import { ResourceProvider } from './src/context/ResourceProvider';
const App = () => (
<AuthProvider>
    <ResourceProvider>
        <AppNav/>
    </ResourceProvider>
</AuthProvider>)

export default App;