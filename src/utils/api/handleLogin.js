//for login page
import axios from "axios";
// Import necessary functions and SDKs
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword as createWithMail, signInWithEmailAndPassword as signInWithMail } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg5KzsN8pI6MROeU-JOYK4sMHWDW7Asus",
    authDomain: "unite-393400.firebaseapp.com",
    projectId: "unite-393400",
    storageBucket: "unite-393400.appspot.com",
    messagingSenderId: "959392956283",
    appId: "1:959392956283:web:6f3e73c1b15c505536c7de",
    measurementId: "G-05HZ8NV1TY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize the Firebase auth service

export default handleLogin = (email, password) => {
  return signInWithMail(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("User logged in:", user);
      var return_x = {
        "data": {	
        "msg": "Client login successful",
            "client": {
              "name": "example name",
              "phonenumber": "123-456-7890",
              "email": "user123@example.com",
              "password": "password"
            }
        },
        "error": null
      }
      return return_x;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
      var return_x = {
        "data": null,
        "err": "Client login failed"
      }
      return return_x;
    });
};