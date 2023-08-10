import React, {useState, createContext, useContext} from 'react';
//create the context that stores all state variables which will be used to log in 
const LoginContext = createContext()
//create the useLoginContext custom hook to get context value from LoginContext
export const useLoginContext = () => useContext(LoginContext) 
export const LoginProvider = ({children}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvisible, setPasswordInvisible] = useState(true)
  const showPassword = () => setPasswordInvisible(prev => !prev) 
  return (
    <LoginContext.Provider value={{email, setEmail, password, setPassword, showPassword, passwordInvisible}}>
        {children}
    </LoginContext.Provider>
  );
}
