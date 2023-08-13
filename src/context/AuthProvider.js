import React, {useState, createContext, useContext} from 'react';
//create the context that stores isLogin and setLogin. These variables will be used to check whehter the user has already logged in or not 
const AuthContext = createContext()
//create the useAuth custom hook to get context value from AuthContext 
export const useAuth = () => useContext(AuthContext)
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