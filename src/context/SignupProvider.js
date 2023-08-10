import React, {useState, createContext, useContext, useRef} from 'react';
//create the context that stores all state variables which will be used to sign up
const SignupContext = createContext()
//create the useLoginContext custom hook to get context value from LoginContext
export const useSignupContext = () => useContext(SignupContext)

export const SignupProvider = ({children}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SignupContext.Provider value={{email, setEmail, password, setPassword, name, setName, confirmPassword, setConfirmPassword}}>
        {children}
    </SignupContext.Provider>
  );
}
