/**
 * @file App.js
 * @description This is the main entry point of the React Native application. It wraps the navigation and context providers around the entire app.
 */


import React from 'react';
import AppNav from './src/navigations/AppNav';
import { AuthProvider } from './src/context/AuthProvider';
import { ResourceProvider } from './src/context/ResourceProvider';


/**
 * @component App
 * @description The main component that sets up the entire application.
 * Every files in this app will have access to all the state variables of AuthProvider and ResourceProvider context
 */
const App = () => (
<AuthProvider>
    <ResourceProvider>
        <AppNav/>
    </ResourceProvider>
</AuthProvider>)

export default App;