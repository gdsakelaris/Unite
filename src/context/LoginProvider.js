import React, { useState, createContext, useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword as createWithMail } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBg5KzsN8pI6MROeU-JOYK4sMHWDW7Asus",
    authDomain: "unite-393400.firebaseapp.com",
    projectId: "unite-393400",
    storageBucket: "unite-393400.appspot.com",
    messagingSenderId: "959392956283",
    appId: "1:959392956283:web:6f3e73c1b15c505536c7de",
    measurementId: "G-05HZ8NV1TY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignupContext = createContext();

export const useSignupContext = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = () => {
        return createWithMail(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User registered:", user);
                return user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error:", errorCode, errorMessage);
                throw error;
            });
    };

    return (
        <SignupContext.Provider value={{ 
            email, setEmail, 
            password, setPassword, 
            name, setName, 
            confirmPassword, setConfirmPassword,
            registerUser
        }}>
            {children}
        </SignupContext.Provider>
    );
}
