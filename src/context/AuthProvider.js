/**
 * @file AuthContext.js
 * @description This file defines a custom authentication context for managing user authentication state.
 * The context provides access to authentication-related data and functions throughout the app.
 */
import React, {useState, createContext, useContext} from 'react';

/**
 * @context AuthContext
 * @description A context to manage user authentication state.
 * Provides access to isLoggedIn, inLoginPage variables,
 *  and loggingIn, switchPage functions.
 * isLogggedIn: a state variable that checks if the user is in the login screen 
 * loggingIn: a function that direct user to homepage after their credential is verified
 * switchPage: a function that toggle between the login page and sign up page 
 */
const AuthContext = createContext()

/**
 * @customHook useAuth
 * @description A custom hook to access the AuthContext and retrieve authentication-related data and functions.
 * @returns {object} An object containing isLoggedIn, loggingIn, inLoginPage, and switchPage.
 */ 
export const useAuth = () => useContext(AuthContext)

/**
 * @component AuthProvider
 * @description A component that wraps the app with the AuthContext.Provider.
 * It manages user authentication state and exposes relevant data and functions to all the children that being wrapped inside.
 * @param {object} props - The children components to be wrapped with the AuthContext.Provider.
 * @returns {JSX.Element} The wrapper components.
 */
export const AuthProvider = ({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [inLoginPage, setInLoginPage] = useState(true)
  const loggingIn = () => setLoggedIn(prev => !prev)
  const switchPage = () => setInLoginPage(prev => !prev)
  return (
    <AuthContext.Provider value={{isLoggedIn, loggingIn, inLoginPage, switchPage}}>
        {children}
    </AuthContext.Provider>
  );
}